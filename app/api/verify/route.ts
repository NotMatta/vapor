import { auth } from "@/auth"

export async function GET() {
    const session = await auth()
    if (!session?.user) {
        return new Response('Not logged in', {
            status: 401,
        })
    }
    return new Response('Welcome bro', {
        status: 200,
    })
}
