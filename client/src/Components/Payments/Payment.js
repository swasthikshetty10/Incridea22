import React, { useEffect, useState } from 'react';
import { Button, Div } from '../Auth/StyledComponentsLogin';
import axios from 'axios'
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
function Payment(props) {

	const navigate = useNavigate();
	const [loading, setLoading] = useState(false)
	const displayRazorpay = async (e) => {
		e.preventDefault();
		props.clearMsg()
		setLoading(true)
		try {
			const response = await axios.post('http://localhost:8080/payments/createOrder', {
				email: props.email
			})
			const { data } = response
			const options = {
				"key": "rzp_test_5e8G9YqQhDdr9I", // Change during production or use document.domain
				"amount": data.amount.toString(),
				"currency": data.currency,
				"name": "Incridea Registration", //Change this stuff
				"description": "Test Transaction",
				"image": "https://www.nme.com/wp-content/uploads/2021/07/RickAstley2021.jpg",
				"order_id": data.id,
				"handler": async function (response) {
					//TODO: EVERYTHING IN COMMENTS
					//TODO: USE TIMEOUTS WITH AXIOS --> can client change??
					const res = await axios.post('http://localhost:8080/auth/verifyPayment', {
						email: props.email,
						payment_id: response.razorpay_payment_id,
						order_id: response.razorpay_order_id,
						signature: response.razorpay_signature,
					})
					const callBackData = res.data
					alert(callBackData) //for now
					// if (data) {
					// 	render register components
					// } else {
					// 	render successSpan useRef
					// }
					//OR use try catch??
					//REGISTER HAPPENS AFTER THIS BUT HOW???
				},
				"prefill": {
					"email": `${props.email}`,
				},
				"theme": {
					"color": "#3399cc"
				}
			};

			const paymentObject = new window.Razorpay(options);
			paymentObject.open()

		} catch (e) {
			console.dir(e);
			props.successSpan.current.innerHTML = `<p class="font-semibold text-red-600">${e.response.data || e || "Error"}</p>`
		}
		setLoading(false)
	}
	return (
		<Button {...props} className={` inline-flex items-center justify-center gap-3  ${loading ? "opacity-90" : "opacity-100"}`} disabled={loading} onClick={displayRazorpay}>
			{loading ? <> <AiOutlineLoading3Quarters className=" animate-spin text-lg " /> <span>Hold on</span></> : 'Proceed To Payment'}
		</Button>
	)
}
export default Payment

