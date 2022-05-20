const users = [{

	"id": 1,
	
	"name": "Veronika",
	
	"email": "vgroves0@vistaprint.com",
	
	"age": 50,
	
	"city": "Javhlant",
	
	"gender": "Female",
	
	"inn": 2604048463
	
	}, {
	
	"id": 2,
	
	"name": "Correy",
	
	"email": "cskidmore1@shop-pro.jp",
	
	"age": 50,
	
	"city": "Junglinster",
	
	"gender": "Male",
	
	"inn": 5396152028
	
	}, {
	
	"id": 3,
	
	"name": "Chrissie",
	
	"email": "csobieski2@go.com",
	
	"age": 40,
	
	"city": "Mercaderes",
	
	"gender": "Female",
	
	"inn": 7437115687
	
	}, {
	
	"id": 4,
	
	"name": "Adrianna",
	
	"email": "awharrier3@hud.gov",
	
	"age": 33,
	
	"city": "Manuel Cavazos Lerma",
	
	"gender": "Non-binary",
	
	"inn": 6292774004
	
	}, {
	
	"id": 5,
	
	"name": "Fairlie",
	
	"email": "feliasen4@bing.com",
	
	"age": 34,
	
	"city": "Радовиш",
	
	"gender": "Female",
	
	"inn": 5943534093
	
}]


class Accordion {
	constructor(selectorName, data) {
		this.wrapper = document.querySelector(selectorName);
		this.container = document.createElement('div');
		this.container.className = 'container';
		this.data = data;
	}
	
	dropDownBlock(event) {
		const block = event.target;
		let userBlock, arrowRight, arrowDown;

		if(block.classList.contains('user__name')) {
			userBlock = block.parentNode.querySelector('.user__info__hidden');
			arrowRight = block.querySelector('.fa-circle-right');
			arrowDown = block.querySelector('.fa-circle-down');
		}else if(block.parentNode.classList.contains('user__name')) {
			userBlock = block.parentNode.parentNode.querySelector('.user__info__hidden');
			arrowRight = block.parentNode.querySelector('.fa-circle-arrow-right');
			arrowDown = block.parentNode.querySelector('.fa-circle-arrow-down');
		}else return;
		
		userBlock.classList.toggle('show');
		arrowRight.classList.toggle('right-hidden');
		arrowDown.classList.toggle('down-hidden');
	}

	createUser (userData) {
		return `<div class="user">
		<div class="user__name">
			<p>${userData.name}</p>
			<i class="fa-solid fa-circle-right"></i>
			<i class="fa-solid fa-circle-down down-hidden"></i>
		</div>

		<div class="user__info__hidden">
			
			<div class="user__info">
				<div class="user__picture">
					<p>Avatar</p>
				</div>

				<div class="user__about">
					<div class="explanation inn"><p>inn:</p>${userData.inn}</div>
					<div class="explanation name"><p>name:</p>${userData.name}</div>
					<div class="explanation age"><p>age:</p>${userData.age}</div>
				</div>

				<div class="user__about">
					<div class="explanation email"><p>email:</p>${userData.email}</div>
					<div class="explanation city"><p>city:</p>${userData.city}</div>
					<div class="explanation gender"><p>gender:</p>${userData.gender}</div>
				</div>

			</div>
		</div>
		
	</div>`;
	}



	render() {
		let html = '';

		for(let user of this.data) {
			html += this.createUser(user);
		}
		this.container.innerHTML = html;
		this.container.onclick = this.dropDownBlock;
		this.wrapper.appendChild(this.container);
	}

}

const acor = new Accordion('.wrapper', users);
acor.render();
