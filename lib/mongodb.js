import { MongoClient, ObjectId } from "mongodb"

const uri = process.env.MONGODB_URI
const dbName = process.env.MONGODB_DB

let client
let clientPromise

if (!uri) {
  throw new Error("Please add your MongoDB URI to .env.local")
}

if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  const globalWithMongo = global

  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(uri)
    globalWithMongo._mongoClientPromise = client.connect()
  }
  clientPromise = globalWithMongo._mongoClientPromise
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(uri)
  clientPromise = client.connect()
}

export async function getAllProjects(limit) {
  const client = await clientPromise
  const db = client.db(dbName)

  const projectsCollection = db.collection("projects")
  const query = projectsCollection.find({}).sort({ date: -1 })

  if (limit) {
    query.limit(limit)
  }

  const projects = await query.toArray()

  return projects.map((project) => ({
    ...project,
    _id: project._id.toString(),
  }))
}

export async function getProjectBySlug(slug) {
  const client = await clientPromise
  const db = client.db(dbName)

  const project = await db.collection("projects").findOne({ slug })

  if (!project) {
    return null
  }

  return {
    ...project,
    _id: project._id.toString(),
  }
}

export async function getRelatedProjects(projectId, tags, limit = 3) {
  const client = await clientPromise
  const db = client.db(dbName)

  const projects = await db
    .collection("projects")
    .find({
      _id: { $ne: new ObjectId(projectId) },
      tags: { $in: tags },
    })
    .limit(limit)
    .toArray()

  return projects.map((project) => ({
    ...project,
    _id: project._id.toString(),
  }))
}

export async function getAllArticles(limit) {
  const client = await clientPromise
  const db = client.db(dbName)

  const articlesCollection = db.collection("articles")
  const query = articlesCollection.find({}).sort({ date: -1 })

  if (limit) {
    query.limit(limit)
  }

  const articles = await query.toArray()

  return articles.map((article) => ({
    ...article,
    _id: article._id.toString(),
  }))
}

export async function getArticleBySlug(slug) {
  const client = await clientPromise
  const db = client.db(dbName)

  const article = await db.collection("articles").findOne({ slug })

  if (!article) {
    return null
  }

  return {
    ...article,
    _id: article._id.toString(),
  }
}

export async function getArticlesByCategory(category, limit) {
  const client = await clientPromise
  const db = client.db(dbName)

  const query = { categories: { $regex: new RegExp(category, "i") } }
  const articlesQuery = db.collection("articles").find(query).sort({ date: -1 })

  if (limit) {
    articlesQuery.limit(limit)
  }

  const articles = await articlesQuery.toArray()

  return articles.map((article) => ({
    ...article,
    _id: article._id.toString(),
  }))
}
