function AppFooterCopyright() {
	return (
		<div className="font-general-regular flex justify-center items-center text-center">
			<div className="text-lg text-ternary-dark dark:text-ternary-light">
				&copy; {new Date().getFullYear()}
				<a
					href="https://github.com/jima-J9M1"
					target="__blank"
					className="hover:underline hover:text-indigo-600 font-bold dark:hover:text-indigo-300 ml-1 duration-500"
				>
					JIMA DUBE
				</a>
				.{' '}
			</div>
		</div>
	);
}

export default AppFooterCopyright;
