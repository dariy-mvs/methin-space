import React from 'react'
import HeaderBoxForm from './HeaderBoxForm';
import './HeaderBox.css';


export default function HeaderBox() {
  return (
    <div class="header_box">
            <div class="header_box_description">
                <h1 class='header_box_description_caption'>methin.space</h1>
                <h2 class='header_box_description_caption_h2'>Академический подход в современной обработке</h2>
                <p class='header_box_description_specification'>Прогрессивная студия обучения музыке, расположенная в городе Краснодар.</p>
                <p class='header_box_description_specification'>Для нас всегда остается важнейшей задачей - улучшение качества и доступности музыкального образования. 
                    Наша цель - создать идеальное пространство для вашего обучения!</p>
                <p class='header_box_description_specification'>Наша цель - создать идеальное пространство для вашего обучения!</p>
                <button class='header_box_description_button'>Узнать больше</button> 
            </div>
            <HeaderBoxForm />
        </div>
  )
}
