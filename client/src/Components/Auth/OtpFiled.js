import React from 'react';

const OtpFiled = () => {
	document.addEventListener('DOMContentLoaded', init);

	const init = () => {
		const $otp_length = 6;

		const element = document.getElementById('OTPInput');
		for (let i = 0; i < $otp_length; i++) {
			let inputField = document.createElement('input');
			inputField.className =
				'w-12 h-12 bg-gray-100 border-gray-100 outline-none focus:bg-gray-200 m-2 text-center rounded focus:border-blue-400 focus:shadow-outline';
			inputField.style.cssText = 'color: transparent; text-shadow: 0 0 0 gray;';
			inputField.id = 'otp-field' + i;
			inputField.maxLength = 1;
			element.appendChild(inputField);
		}

		// This is for switching back and forth the input box for user experience
		const inputs = document.querySelectorAll('#OTPInput > *[id]');
		for (let i = 0; i < inputs.length; i++) {
			inputs[i].addEventListener('keydown', function (event) {
				if (event.key === 'Backspace') {
					if (inputs[i].value == '') {
						if (i != 0) {
							inputs[i - 1].focus();
						}
					} else {
						inputs[i].value = '';
					}
				} else if (event.key === 'ArrowLeft' && i !== 0) {
					inputs[i - 1].focus();
				} else if (event.key === 'ArrowRight' && i !== inputs.length - 1) {
					inputs[i + 1].focus();
				} else if (event.key != 'ArrowLeft' && event.key != 'ArrowRight') {
					inputs[i].setAttribute('type', 'text');
					inputs[i].value = '';
					setTimeout(function () {
						inputs[i].setAttribute('type', 'password');
					}, 1500);
				}
			});
			inputs[i].addEventListener('input', function () {
				// inputs[i].value = inputs[i].value.toUpperCase();
				if (i === inputs.length - 1 && inputs[i].value !== '') {
					return true;
				} else if (inputs[i].value !== '') {
					inputs[i + 1].focus();
				}
			});
		}

		// This is to get the value on pressing the submit button
		document.getElementById('otpSubmit').addEventListener('click', function () {
			const inputs = document.querySelectorAll('#OTPInput > *[id]');
			let compiledOtp = '';
			for (let i = 0; i < inputs.length; i++) {
				compiledOtp += inputs[i].value;
			}
			document.getElementById('otp').value = compiledOtp;
			alert(compiledOtp);
			return true;
		});
	};

	return (
		<div class='min-h-screen flex flex-col justify-center text-center'>
			<h1>Hello</h1>
			<form>
				<div class='flex justify-center ' id='OTPInput'></div>

				<input hidden id='otp' name='otp' value='' />
				<button
					class='mt-10 button button-primary font-bold text-lg px-6 pt-3 pb-3 rounded bg-black text-white'
					id='otpSubmit'
				>
					Submit
				</button>
			</form>
		</div>
	);
};

export default OtpFiled;
