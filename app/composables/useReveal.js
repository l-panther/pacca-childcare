export const useReveal = () => {
  let observer

  const initReveal = () => {
    const revealEls = document.querySelectorAll(
      '.reveal, .reveal-scale'
    )

    const groups = {}

    revealEls.forEach(el => {
      const parent = el.closest(
        'section, .club-card, .review-card'
      )

      const section = parent?.closest('section')

      const key = section
        ? Array.from(
            document.querySelectorAll('section')
          ).indexOf(section)
        : 0

      groups[key] = groups[key] || []
      groups[key].push(el)
    })


    Object.values(groups).forEach(group => {
      group.forEach((el, index) => {
        el.style.transitionDelay = `${index * 70}ms`
      })
    })


    observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')

            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -60px 0px'
      }
    )


    revealEls.forEach(el => {
      observer.observe(el)
    })
  }


  const destroyReveal = () => {
    observer?.disconnect()
  }


  return {
    initReveal,
    destroyReveal
  }
}