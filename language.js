function changeLanguage(lang){
  let explainer_link="https://docs.google.com/document/d/1UmfWCSgtZPR6o3B1lfsqi51bADjnDvMrDLg1M2fTIt4/preview";
  let explainer_button="Explainer";
  let instruction_button="Instructions";
  let faq_link = "https://docs.google.com/document/d/14LMT4s6yDI4tcYk30ME1ITWkQC4pIXPVrQoioQLdbLM/preview";
  let faq_button = "FAQ";
  let forms_button = "Sample Forms";
  let cccc = "Covid Childcare Coop Calculator";
  let instructions_text = `How to use the CCCC

Family 1:

Select the number of families in the co-op
Enter your name in the “Family 1” field, then click the colored box next to it
Mark the days on the calendar you are not available. To mark the same day every week, click the name of that day. (If you’re not available any Tuesdays, click Tuesday.)
When you’re finished marking availability, click the “Link Calendar” button at bottom and it will automatically copy the generated link for you to send to Family 2

Family 2-X:

Open the link you get from Family X-1
Enter your name in the “Family X” field, then click the colored box next to it
Mark the days on the calendar when you are not available
When you’re finished marking availability, click the “Link Calendar” button at bottom and paste the automatically copied link to send it to the next family

Last family:

Once everyone has indicated their availability (every family field should be filled and all the colors represented on the calendar), click the “Create Schedule” button at bottom
The calendar now represents an approximately fair schedule given your availabilities. (If for any reason you don’t like it, press the “Create” button again to generate a different fair option with the same restrictions)
To share the calendar, use the “Link Calendar” button to create a link to the schedule, or use the “Download Schedule” button to download an html file of your schedule.

Troubleshooting:

To exclude or include weekend days, use the “Weekends” toggle at top

To go back and modify the availability calendar after you’ve generated a schedule, click the “Change Availability”/”Show Schedule” toggle at top

To modify the final schedule, select family colors as you did for the availability calendar and use them to reassign scheduled days (if you want to), then download or share as normal`;
  let jump_to = "Jump To: ";
  let weekendsOFF = "Weekends OFF";
  let weekendsON = "Weekends ON";
  let showschedule = "Show Schedule";
  let changeav = "Change Availabilities";
  let reset_button = "Reset";
  let sun = "Sun";
  let mon = "Mon";
  let tue = "Tue";
  let wed = "Wed";
  let thu = "Thu";
  let fri = "Fri";
  let sat = "Sat";
  let next_button = "Next";
  let prev_button = "Previous";
  let familynumlabel = "Number of Caretakers: ";
  let family = "Family";
  let create_schedule = "Create Schedule";
  let download_schedule = "Download Schedule";
  let link_calendar = "Link Calendar";
  let link_copied = "Link Copied!";

  if(lang=="es"){
    explainer_link="https://docs.google.com/document/d/1fqJmnk-Iz6qcFflu_zt3fENiBzRxI9Vqmc-dUfXuOTg/preview";
     explainer_button="Explicar";
     instruction_button="Instrucciones"
     faq_link = "https://docs.google.com/document/d/1iT09ExGNh9RVvjCiNYHzS9LjUkwK7AfB836SVG5or14/preview";
     faq_button = "FAQ";//"Preguntas Frecuentes";
     forms_button = "Formulario de muestra";
     cccc = "Covid Childcare Coop Calculator";
     instructions_text = `Familia 1:
En la caja bajo del calendario
Entra el número de familias en la cooperativa (maxima 7)
Ponga su nombre en la casilla de “family 1”, haga click en la caja colorida al lado, cuando la caja aparece llena de color está marcando días por esta familia
Marcas el día en el horario cuando no esté disponible. -- una banda de su color debe aparecer en el día cuando no está disponible
Para marcar el mismo día cada semana haga clic en el nombre del día (si no está disponible en nigun Martes, haga clic en Martes)
Cuando termina marcando la disponibilidad, haga clic el “Link Calendar” botón de abajo [el último] y el sistema genera automáticamente una enlace para mandar a la Familia 2. Esta enlace tendrá la información que Usted entró.  Mande este link al número de teléfono, whatsapp, o correo electrónico de la próxima familia

Familia 2 a 6
Abre la enlace que recibe de la Familia anterior
En la caja bajo el calendario, entra su nombre en la casilla que diga “Familia” [si es la 2nda entra en Familia 2, la 3ra Familia 3, etc], después, haga clic en la caja colorido al lado. Cuando esta caja está llena de color está marcando sus días
En el calendario -- marque el días cuando no esté disponible -- una banda de su color debe aparecer en el día cuando no está disponible
Cuando termina marcando la disponibilidad, haga clic el “Link Calendar” botón de abajo y el sistema genera automáticamente una enlace para mandar a la próxima Familia por whatsapp, mensajes, o correo electrónico.

Ultima Familia:
Cuando cada familia haya indicado su disponibilidad (cada casilla de familia debe ser llenado y todos los colores representado en el horario), haga clic en el botón de “crear horario” abajo.
Ahora el horario muestra un horario aproximadamente justo dado sus disponibilidades (si por cualquier razón no le gusta, haga clic en el botón de  “crear” otra vez para genera otra opción con las mismas restricciones)
Para compartir el horario, use el “Enlace de Horario” abajo para crear un enlace al horario, o use el botón “descarga el horario” para descarga un archivo html de su horario

Solución de Problemas:
Para incluir o excluir los fin de semanas, use el botón “Fin de Semanas” arriba.

Para retroceder y cambiar el calendario de disponibilidad, después de generar un horario, haga clic en el botón “cambiar disponibilidad” “mostrar horario” arriba.
Para cambiar el horario final, seleccionar los colores de la familia como dice arriba`;
     jump_to = "Saltar A: ";
     weekendsOFF = "Fin de Semanas NO ";
     weekendsON = "Fin de Semanas SI";
     showschedule = "Muestra Horario";
     changeav = "Cambiar Disponibilidad";
     reset_button = "Reiniciar";
     sun = "Domingo";
     mon = "Lunes";
     tue = "Martes";
     wed = "Miércoles";
     thu = "Jueves";
     fri = "Viernes";
     sat = "Sábado";
     next_button = "Siguiente";
     prev_button = "Previo";
     familynumlabel = "Número de Cuidadores: ";
     family = "Familia";
     create_schedule = "Crear Horario";
     download_schedule = "Descargar Horario";
     link_calendar = "Enlace a Horario";
     link_copied = "Enlace es Copiado!";
  }

  if(lang=="zh"){
    explainer_link="https://docs.google.com/document/d/1q0dHrDWbqS7yeT-hGbzwsEzjP_yX0JobcE3C1tDsgI0/preview";
     explainer_button="背景阐述";
     instruction_button="使用指南"
     faq_link = "https://docs.google.com/document/d/1ZkM400cBNLvPSVfkShzX3ssK80zac8eWKaQSugbpofk/preview";
     faq_button = "常见问题答疑";//"Preguntas Frecuentes";
     forms_button = "表格示例";
     cccc = "Covid Childcare Coop Calculator";
     instructions_text = `协作托儿日程生成器

how to use...如何使用协作托儿日程生成器？

1号家庭
选择此协作社中的家庭数量
在“1号家庭”一栏中输入您的名字，并点选旁边的颜色框
在日历上标记出您无法承担托儿工作的日期。如需标记每周的同一天，请单击该天的名称（如您每星期二都有事，请单击星期二）
当您完成标注后，请点击网页底部“链接日程”一栏，网页将自动复制日程表并生成链接，您可将自动复制的链接发送给2号家庭

2号家庭（此后的每个家庭可以此类推）
打开您从1号家庭（或前一个家庭）处获得的链接
在“2号家庭”（或您家庭的标号）一栏中输入您的名字，并点选旁边的颜色框
在日历上标记出您无法承担托儿工作的日期
当您完成标注后，请点击网页底部“链接日程”一栏，网页将自动复制日程表并生成链接，您可将自动复制的链接发送给下一个家庭

最后一个填写日程的家庭
当所有人填写完毕后，请确认每个家庭栏都已被填写，所有的相关颜色都在日程表上有所体现。点击网页底部“创建日程”一栏生成日程表
根据每个家庭的不同情况，这一日程表会在最大程度上公平分配托儿工作。如果您因任何原因不满意这份日程，您可以再次点击“创建日程”，生成同样条件下一份不同的日程表
要分享此日程表，请点击“链接日程”一栏，生成新的表格链接。或点击“下载日程”一栏，获取此日程表的html格式副本

其它问题
如需包括或排除周末，请使用表格上方的“周末”按钮进行切换
在生成日程表后，如需修改您的时间，请点击表格上方的“修改时间/展示日程”按钮进行切换
如需修改最终日程，请点选各个家庭的代表颜色，并重新分配该家庭承担托儿工作的日期。您可重新下载和分享这一新的日程表`;
     jump_to = "跳至: ";
     weekendsOFF = "不包括周末";
     weekendsON = "包括周末";
     showschedule = "展示日程";
     changeav = "修改日程";
     reset_button = "重置";
     sun = "周日";
     mon = "周一";
     tue = "周二";
     wed = "周三";
     thu = "周四";
     fri = "周五";
     sat = "周六";
     next_button = "后";
     prev_button = "前";
     familynumlabel = "可承担托儿工作的人数: ";
     family = "家庭";
     create_schedule = "创建日程";
     download_schedule = "下载日程";
     link_calendar = "链接日程 ";
     link_copied = "链接已复制";
  }

  document.getElementById("title").innerHTML = cccc;
  document.getElementById("instruction_button").innerHTML = instruction_button;
  document.getElementById("explainer").setAttribute("href",explainer_link);
  document.getElementById("explainer").innerHTML = explainer_button;
  document.getElementById("faq").setAttribute("href",faq_link);
  document.getElementById("faq").innerHTML = faq_button;
  document.getElementById("forms").innerHTML = forms_button;
  document.getElementById("cccc").innerHTML = cccc;
  document.getElementById("instructions").innerHTML = instructions_text;
  document.getElementById("jump").innerHTML = jump_to;
  document.getElementById("toggleWkdays").value = weekendsOFF;
  document.getElementById("toggleWkdays").setAttribute("on",weekendsON);
  document.getElementById("toggleWkdays").setAttribute("off",weekendsOFF);
  document.getElementById("toggleSched").value = showschedule;
  document.getElementById("toggleSched").setAttribute("sched",showschedule);
  document.getElementById("toggleSched").setAttribute("av",changeav);
  document.getElementById("rst").innerHTML = reset_button;
  document.getElementById("sun").innerHTML=sun;
  document.getElementById("mon").innerHTML=mon;
  document.getElementById("tue").innerHTML=tue;
  document.getElementById("wed").innerHTML=wed;
  document.getElementById("thu").innerHTML=thu;
  document.getElementById("fri").innerHTML=fri;
  document.getElementById("sat").innerHTML=sat;
  document.getElementById("sun").innerHTML=sun;
  document.getElementById("omon").innerHTML=mon;
  document.getElementById("otue").innerHTML=tue;
  document.getElementById("owed").innerHTML=wed;
  document.getElementById("othu").innerHTML=thu;
  document.getElementById("ofri").innerHTML=fri;
  document.getElementById("osat").innerHTML=sat;
  document.getElementById("previous").innerHTML=prev_button;
  document.getElementById("next").innerHTML=next_button;
  document.getElementById("famnumlab").innerHTML=familynumlabel;
  document.getElementById("family1").innerHTML=family+" 1";
  document.getElementById("family2").innerHTML=family+" 2";
  document.getElementById("family3").innerHTML=family+" 3";
  document.getElementById("family4").innerHTML=family+" 4";
  document.getElementById("family5").innerHTML=family+" 5";
  document.getElementById("family6").innerHTML=family+" 6";
  document.getElementById("family7").innerHTML=family+" 7";
  document.getElementById("submit_link").innerHTML=create_schedule;
  document.getElementById("download_link").innerHTML=download_schedule;
  document.getElementById("export").innerHTML=link_calendar;
  document.getElementById("copied").innerHTML=link_copied;
  document.documentElement.lang=lang;
}
