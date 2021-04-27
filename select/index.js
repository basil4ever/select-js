import {Select} from "./select/select";
import './select/styles.scss'

const select = new Select('#select', {
    placeholder: 'какая ты Настя сегодня',
    data: [
        {id: '1', value: 'Свинастя'},
        {id: '2', value: 'Поросястя'},
        {id: '3', value: 'Нафтя, просто Нафтя'},
        {id: '4', value: 'Копилка'},
        {id: '5', value: 'поросячье ухо'},
    ],
    onSelect(item) {
        console.log('Selected Item', item)
    }
})
window.s = select