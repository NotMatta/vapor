import { signIn } from "@/auth"
import Link from "next/link"

const SignUpForm = () => { 
  return (
    <form className="flex flex-col space-y-4 border w-1/2 mx-auto [&>label>input]:bg-gray-200 [&>button]:bg-gray-200" 
      action={async (formData) => {
      "use server"
      await signIn("credentials", formData)
    }}>
      <label>Username<input name="username" type="text" /></label>
      <label>Email<input name="email" type="email" /></label>
      <label>Password<input name="password" type="password" /></label>
      <input name="action" value="signUp" type="hidden" />
      <button>Sign Up</button>
      <Link href="/auth/signin">Already have an accout?</Link>
    </form>
  )
}
export default SignUpForm
 
