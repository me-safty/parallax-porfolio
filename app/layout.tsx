import { Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
	subsets: ["latin"],
	variable: "--poppins-font",
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export const metadata = {
	title: "Mohamed Safty",
	description: "Front-end Web developer",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body>
				<div className={poppins.className}>{children}</div>
			</body>
		</html>
	)
}
