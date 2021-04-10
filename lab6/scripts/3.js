const dropDownBtn = document.getElementsByClassName('plan-block__btn--dropDown')[0];
const dropDownList = document.getElementsByClassName('plan-block__list--dropDown')[0];

dropDownBtn.addEventListener('click', () => {
    const listStyle = dropDownList.style;
    listStyle.display === 'none' || listStyle.display === '' ? listStyle.display = 'initial' : listStyle.display = 'none';
});