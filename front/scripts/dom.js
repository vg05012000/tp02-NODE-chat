const main = document.querySelector('main')

/** @param {Record<string, string>} data */
export function appendMessage(data) {

  const msgEl = document.createElement('div')
  msgEl.classList.add('message')

  const msgDate = document.createElement('div')
  msgDate.textContent = data.date
  msgEl.append(msgDate)

  const messageOwner = document.querySelector('#pseudo')?.value
  messageOwner.p
  msgEl.classList.add(data.pseudo === messageOwner ? 'owner' : 'receved')

  const pseudoSpan = document.createElement('span')
  pseudoSpan.textContent = data.pseudo
  msgEl.append(pseudoSpan)

  const bodyP = document.createElement('p')
  bodyP.textContent = data.body
  msgEl.append(bodyP)



  main?.appendChild(msgEl)
  main?.scrollTo(0, main.scrollHeight)
}
