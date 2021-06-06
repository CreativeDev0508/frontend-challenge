export default {
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          400: '#46389B',
          500: '#32286F',
        },
        secondary: {
          300: '#9AE7C2',
          500: '#21F3B4',
        },
      },
    },
  },
  shortcuts: {
    btn: 'inline-flex items-center mt-4 px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-primary-500 hover:bg-primary-400 focus-visible:(ring-2 ring-offset-2 ring-offset-white ring-primary-500 outline-none) active:bg-primary-500 transition ease-in-out duration-150 disabled:bg-blue-gray-500',
    'btn-outline':
      'inline-flex items-center px-2 border border-primary-500 text-sm leading-6 font-medium rounded-md text-primary-500 bg-white hover:(bg-primary-500 text-white) focus-visible:(ring-2 ring-offset-2 ring-offset-white ring-primary-500 outline-none) active:bg-primary-500 transition ease-in-out duration-150',
  },
}
