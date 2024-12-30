import { auth, signIn } from "@/auth"
import Verify from "@/components/verify"
 
const Page = async () => {
    const session = await auth()
    return (
        <div>
            yo yo
            <Verify />
            {session?.user ? (
                <div>
                    <p>Signed in as {session.user.email}</p>
                    <button>Sign out</button>
                </div>
            ) : (
            <form action={async (formData) => {
                "use server"
                await signIn("credentials", formData)
              }}>
              <label>
                Email
                <input name="email" type="email" />
              </label>
              <label>
                Password
                <input name="password" type="password" />
              </label>
              <button>Sign In</button>
            </form>
            )}
        </div>
  )
}
export default Page
