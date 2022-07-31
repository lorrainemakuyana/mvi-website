import emailjs from '@emailjs/browser'
import ReCaptcha from "react-google-recaptcha";
import {Formik} from 'formik'
import {useRef, useState} from 'react'; 
import Input from "./Input";
import * as Yup from 'yup'
export default function Contact() {

	const validate = Yup.object({
	name: Yup.string().required("Name is required"),
	phone: Yup.number().required('Phone number is required'),
	email: Yup.string()
		.email("Invalid email address")
		.required("Email is required"),
	message: Yup.string().required("Message is required"),
	});
	
	const formRef = useRef();
	
	const sendForm = (e) => {
		e.preventDefault();
		emailjs.sendForm(
			process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
			process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
			formRef.current,
			process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
		  );
		  alert(
			`Hi ${e.target.name.value}, thank you for contacting My Vision Initiative. We will be back in touch soon.`
		  );
		}

  return (

    <section className="text-gray-600 font-montserrat w-full px-10 md:px-0 md:w-3/5 mx-auto py-24">
		<h2 className="text-rose-700 mb-1 font-bold text-2xl">Send us a message
		</h2>
		<p className="leading-relaxed mb-5 text-rose-600 pt-3 text-lg">Complete the form below to get in touch with My Vision Initiative.
		</p>

		<Formik 
			initialValues={{
				name:'', 
				email:'',
				message:'', 
				phone:''
			}}
			validationSchema={validate}
			onSubmit={sendForm}
		>
			{(formik) => (
				<form ref={formRef}>
					<Input label="Full name *" name='name' type='text' required/>
					<Input label="Phone number * " name='phone' type='phone_number' required />
					<Input label="Email address *" name='email' type='email' required />
					<Input label="Message *" name='message' required placeholder='Hi MVI, ' /> 
					<ReCaptcha sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} />
					<button 
						type='submit' 
						className='border-rose-700 border-2 px-5 py-3 text-rose-700 font-bold rounded-lg mt-5'
						onClick={sendForm}
					>
						Send Message
					</button>
				</form>
			)}				
		</Formik>
    </section> 
    )
 }