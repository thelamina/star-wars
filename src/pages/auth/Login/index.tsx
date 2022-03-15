import { Formik, Form, Field } from 'formik';
import { useNavigate } from 'react-router-dom';
import { Input, Button } from '../../../components/atoms';
import { useStore } from '../../../store';
import * as Yup from 'yup';

export const Login = () => {
	const { loginUser } = useStore();
	const navigate = useNavigate();
	const validationSchema = Yup.object({
		email: Yup.string()
			.email('Invalid email address')
			.required('Email is required'),
		password: Yup.string()
			.required('Password is required')
			.min(8, 'Password must be 8 characters or more')
			.matches(
				/^(?=.*[a-z])/,
				'Password must include at least one alphabet'
			)
			.matches(
				/^(?=.{6,20}$)\D*\d/,
				'Password must include at least one digit'
			),
	});
	const handleSubmit = async (data: any, actions: any) => {
		await loginUser(data.email, data.password);
		actions.setSubmitting(false);
		navigate('/');
	};

	return (
		<div className='flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10'>
			<div className='mb-12 dark:text-white'>
				<h4 className='font-semibold text-2xl text-[#434854] pb-1'>
					Login
				</h4>
				<p className='text-[#737373]'>
					Kindly enter your details to log in{' '}
				</p>
			</div>
			<div className='mt-8'>
				<Formik
					initialValues={{
						email: '',
						password: '',
					}}
					validationSchema={validationSchema}
					onSubmit={(values, actions) => {
						handleSubmit(values, actions);
					}}
				>
					{(props) => (
						<Form autoComplete='off'>
							<div className=''>
								<Field name='email'>
									{({
										field,
										form: { touched, errors },
										meta,
									}: any) => (
										<Input
											placeholder='Email Address'
											{...field}
											error={meta.touched && meta.error}
										/>
									)}
								</Field>
							</div>
							<div className=''>
								<Field name='password'>
									{({
										field,
										form: { touched, errors },
										meta,
									}: any) => (
										<Input.Password
											placeholder='Password'
											{...field}
											error={meta.touched && meta.error}
										/>
									)}
								</Field>
							</div>

							<div className=''>
								<Button
									type='submit'
									isLoading={props.isSubmitting}
								>
									Log in
								</Button>
							</div>
						</Form>
					)}
				</Formik>
			</div>
			<div className='flex items-center justify-center  mt-2'>
				<Button variant='ghost' className='text-sm' to='/'>
					Forgot your password?
				</Button>
			</div>
			<div className='flex items-center justify-center mt-10'>
				<p className='text-[#303B54] text-xs'>
					<a href='as' className='underline'>
						Privacy Policy
					</a>{' '}
					<span className='text-gray-300'> and </span>
					<a href='as' className='underline'>
						Terms of services
					</a>
				</p>
			</div>
		</div>
	);
};
