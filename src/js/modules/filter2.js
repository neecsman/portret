const filter2 = () => {
    const menu = document.querySelector('.portfolio-menu'),
          items = menu.querySelectorAll('li'),
          wrapper = document.querySelector('.portfolio-wrapper'),
          imgBlock = document.querySelectorAll('portfolio-block'),
          no = document.querySelector('.portfolio-no');

        /*   const typeFilter = (markType) => {
            markAll.forEach(mark => {
                mark.style.display = 'none';
                mark.classList.remove('animated', 'fadeIn');
            });
    
            no.style.display = 'none';
            no.classList.remove('animated', 'fadeIn');
    
    
            if (markType) {
                markType.forEach(mark => {
                    mark.style.display = 'block';
                    mark.classList.add('animated', 'fadeIn');
                });
            } else {
                no.style.display = 'block';
                no.classList.add('animated', 'fadeIn');
            }
        }; */

    function filter (className) {
        items.forEach(item => {

            if (item.classList.contains(className)) {
                item.addEventListener('click', () => {



                    imgBlock.forEach(child => {
                        child.style.display = 'none';
                        child.classList.remove('animated', 'fadeIn');

                        if (child.classList.contains(className) && className) {
                            child.style.display = 'block';
                            child.classList.add('animated', 'fadeIn');
                        } else {
                            no.style.display = 'block';
                            no.classList.add('animated', 'fadeIn');
                        }

                        

                    });
                });
            }
        });
    }

  /*   btnAll.addEventListener('click', () => {
        typeFilter(markAll);
    }); */

    filter('.all');
    filter('.lovers');
    filter('.guy');
    filter('.chef');
    filter();

    menu.addEventListener('click', (e) => {
        let target = e.target;

        if(target && target.tagName == 'LI') {
            items.forEach(btn => btn.classList.remove('active'));
           
            target.classList.add('active');
        }
    });
};

export default filter2;