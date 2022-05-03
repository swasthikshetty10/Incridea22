import React, { useState } from 'react';
import { Button } from '../Auth/StyledComponentsLogin';
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
			const response = await axios.post('https://peaceful-river-11730.herokuapp.com/payments/createOrder', {
				email: props.email
			})
			const { data } = response
			const options = {
				"key": "rzp_live_oC59fGEg79wjse",
				"amount": data.amount.toString(),
				"currency": data.currency,
				"name": "Incridea Registration",
				"description": "Incridea 2022 Participant Registration",
				"image": "https://incridea.in/static/media/logo.a7730a296d5fdd7a7cdd.png",
				"order_id": data.id,
				"handler": function (response) {
					if (response.razorpay_payment_id, response.razorpay_order_id, response.razorpay_signature) {
						navigate(`/register/${props.email}`)
					}
					else {
						throw new Error('Payment Failed')
					}
				},
				"prefill": {
					"email": `${props.email}`,
				},
				"theme": {
					"color": "#9d7643"
				}
			};

			const paymentObject = new window.Razorpay(options);
			paymentObject.open()

		} catch (e) {
			props.successSpan.current.innerHTML = `<p class="font-semibold text-red-600">${e.response.data || e || "Error"}</p>`
		}
		setLoading(false)
	}
	return (
		<Button {...props} className={` inline-flex items-center justify-center gap-3  ${loading ? "opacity-90" : "opacity-100"}`} disabled={loading} onClick={displayRazorpay}>
			{loading ? <> <AiOutlineLoading3Quarters className=" animate-spin text-lg " /> <span>Processing...</span></> : 'Proceed To Payment'}
		</Button>
	)
}
export default Payment

