export const transform = {
    created(el, binding) {
        let current = 0
        el.addEventListener('dblclick', () => {
            current += binding.value || 90
            if (!binding.arg || binding.arg === 'rotate') {
                if (binding.modifiers.animate) {
                    el.style.transition = 'transform 0.5s'
                }
                if (binding.modifiers.reverse) {
                    current -= binding.value || 90
                } else {
                    current += binding.value || 90
                }
                el.style.transform = `rotate(${current}deg)`

            } else if (binding.arg === 'scale') {
                el.style.transform = `scale(${current})`
            }
        })
    },
}