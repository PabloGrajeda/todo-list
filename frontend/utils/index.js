import { toast } from 'nextjs-toast-notify'

export const showToast = (type, message) => {
	toast[type](message, {
		duration: 4000,
		progress: true,
		position: 'bottom-right',
		transition: 'bounceIn',
		sound: true,
	})
}
