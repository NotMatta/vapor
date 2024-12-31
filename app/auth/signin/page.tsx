import { signIn } from "@/auth"
import Link from "next/link"

const SignInForm = () => { 
  return (
    <form className="flex flex-col space-y-4 border w-1/2 mx-auto [&>label>input]:bg-gray-200 [&>button]:bg-gray-200" 
      action={async (formData) => {
        "use server"
        await signIn("credentials", formData)
      }}>
      <label>Email<input name="email" type="email" /></label>
      <label>Password<input name="password" type="password"/></label>
      <input name="action" value="signIn" type="hidden" />
      <input name="username" value="" type="hidden" />
      <button>Sign In</button>
      <Link href="/auth/signup">Create an account</Link>
    </form>
    )
}
export default SignInForm
 
