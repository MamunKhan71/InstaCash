import { connectDB } from "@/app/lib/ConnectDB"

export const POST = async (request) => {
    const newUser = await request.json()
    try {
        const db = await connectDB()
        const userCollection = db.collection("users")
        const existingUser = await userCollection.findOne({ email: newUser.email })
        if (existingUser) {
            return Response.json({ message: "User exists! Please login!", status: 304 })
        }
        const result = await userCollection.insertOne(newUser)
        return Response.json({ message: "User Created!", status: 200 })
    } catch (error) {
        return Response.json({ message: "Register Failed", status: 304 })
    }
}