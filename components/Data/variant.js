const variants = {
    inactive: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            ease: 'easeInOut'
        },
    },
    out: {
        opacity: 0,
        y: -100,
        transition: {
            duration: 1,
            ease: 'easeInOut'
        }
    },
    in: {
        y: 100,
        opacity: 0,
        transition: {
            duration: 1,
            ease: 'easeInOut'
        }
    },
};

export default variants;