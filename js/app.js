const getRequestGithub = new Request("https://api.github.com/repos/Rodrigaumm/rodrigaumm.github.io/contents/Projects",{
	method:"GET"
})

let githubData = [];
const section = document.querySelector('.github-links');
const imgSrcs = ['./imgs/flexblog.png','./imgs/wildbeast.png']

fetch(getRequestGithub)
.then((response)=>{
	return response.json()
})
.then((arr)=>{
	githubData = arr;
	githubData.forEach((content,index)=>{
		const link = document.createElement('a')
		const div = document.createElement('div')
		const img = document.createElement('img')
		const h1 = document.createElement('h1')

		div.classList.add('project-container')

		h1.innerHTML = content.name.toUpperCase()
		h1.classList.add('project-title')

		img.src=imgSrcs[index]
		img.alt=content.name
		img.classList.add('project-print')

		link.classList.add('project-link')
		link.href = `https://rodrigaumm.github.io/Projects/${content.name}/index.html`
		
		link.appendChild(h1)
		link.appendChild(img)
		div.appendChild(link)
		section.appendChild(div)
	})
	console.log(githubData)
})
.catch((error)=>{
	console.error(error)
})



