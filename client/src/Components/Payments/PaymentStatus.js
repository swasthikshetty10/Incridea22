import React, { useEffect, useState } from 'react';
// import db from '../../firebaseConfig';
// const { db } = require('../../firebaseConfig');
import { doc, getDoc } from 'firebase/firestore';
import { Link, useParams } from 'react-router-dom';

const PaymentStatus = () => {
	const [values, setValues] = useState({ success: false, error: false });
	const { orderId } = useParams();
	const { success, error } = values;

	useEffect(() => {
		const getStatus = async () => {
			const paymentRef = doc(db, 'Payments/3bwEWFJWEnvTIdWjbhC9');
			const mySnapshot = await getDoc(paymentRef);

			if (mySnapshot.exists()) {
				const Snapdata = mySnapshot.data();

				Snapdata.paymentHistory.forEach((data) => {
					if (data.body.orderId === orderId) {
						if (data.body.resultInfo.resultStatus === 'TXN_SUCCESS') {
							setValues({ ...values, success: true, error: false });
						}
					} else {
						setValues({ ...values, success: false, error: 'Payment Failed' });
					}
				});
			} else {
				console.log(mySnapshot.exists());
			}
		};

		getStatus();
	}, [values, orderId]);

	return (
		<center>
			<h1>PaymentStatus</h1>
			{success && <h2>Payment Succesful</h2>}
			{error && <h2>{error}</h2>}
			<br />
			<Link to='/login'>Login</Link>
			<br />
			<Link to='/'>Home</Link>
		</center>
	);
};

export default PaymentStatus;
