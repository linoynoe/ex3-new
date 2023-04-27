let currentSize = 100;
		let cubeCounter = 0;
		const maxCubes = 12;
        const letters = ['A','B','C','D','E','F'];
		function createCubes() {
			if (cubeCounter >= maxCubes) {
				alert('Maximum number of cubes reached!');
				return;
			}

            

			const sizes = [currentSize, currentSize + 50, currentSize + 100];
			const container = document.createElement('div');
			container.style.display = 'flex';

			sizes.forEach((size) => {
				if (cubeCounter >= maxCubes) {
					return;
				}

				const cube = document.createElement('div');
				cube.classList.add('cube');
				cube.style.width = size + 'px';
				cube.style.height = size + 'px';
				container.appendChild(cube);
				cubeCounter++;
			});

			document.body.appendChild(container);

			currentSize += 50; // Increase size for next trio
		}

