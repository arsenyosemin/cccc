function changeLanguage(lang){
  lang = lang.substring(0,2);
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
  let sun = "Su";
  let mon = "Mo";
  let tue = "Tu";
  let wed = "We";
  let thu = "Th";
  let fri = "Fr";
  let sat = "Sa";
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
     instructions_text = `如何使用协作托儿日程生成器？

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
     next_button = "后一周";
     prev_button = "前一周";
     familynumlabel = "可承担托儿工作的人数: ";
     family = "家庭";
     create_schedule = "创建日程";
     download_schedule = "下载日程";
     link_calendar = "链接日程 ";
     link_copied = "链接已复制";
  }

  if(lang=="pt"){
    explainer_link="https://docs.google.com/document/d/17wxn2EOBmuS8MUTIXf0PFz7JpxSL8IYDbZCBd9M93ro/preview";
     explainer_button="Explicação";
     instruction_button="Instruções"
     faq_link = "https://docs.google.com/document/d/1jBi1QC3b3s0_sygH5YG4Dj-jo1ADzAZoewzsvULFGI0/preview";
     faq_button = "FAQ";//"Preguntas Frecuentes";
     forms_button = "Exemplos de formulários";
     cccc = "Covid Childcare Coop Calculator";
     instructions_text = `Instruções
Como usar o CCCC

Família 1:

Indicar o número de cuidadores/famílias do seu co-op.
Inserir o seu nome no campo “Família 1,” depois clicar na caixa colorida ao lado.
Assinalar os dias no calendário em que não está disponível. Para assinalar o mesmo dia para todas as semanas, clicar no nome desse dia (se não tiver disponibilidade à terça-feira, clicar em “Terça-feira”).
Quando acabar de assinalar a indisponibilidade, clicar em “Fazer link do calendário” em baixo; o programa copiará automaticamente o link para depois poder mandá-lo à Família 2.


Família 2-X:

Abrir o link que recebeu de Família 1.
Inserir o seu nome no campo “Família  X”, depois clicar na caixa colorida ao lado.
Assinalar os dias do calendário em que não está disponível.
Quando acabar de marcar a indisponibilidade, clicar em “Fazer link do calendário” em baixo e colar o link (automaticamente copiado) para mandar à próxima família.


Última família:

Depois de todos marcarem a sua indisponibilidade (todos os campos “Família” devem estar cheios e todas a cores representadas no calendário), clicar em “Criar horário” em baixo.
O calendário agora mostra um horário aproximadamente justo conforme as vossas disponibilidades. (Se por alguma razão não gostar do horário, clicar em “Criar horário” outra vez para gerar outra opção justa com as mesmas restrições).

Para partilhar o calendário, clicar em “Fazer link do calendário” para criar um link do horário, ou usar “Fazer download do horário” para receber um ficheiro HTML do seu horário.


Soluções de problemas:

Para incluir ou excluir os fins-de-semana, usar a opção “Fins-de-semana SIM/NÃO.”

Para voltar a modificar o calendário de disponibilidade depois de ter criado um horário, clicar em “Mostrar horário/Mudar disponibilidades” em cima.

Para modificar o horário final, seleccionar cores para as famílias como fez para o calendário de disponibilidades e use-as para mudar os dias atribuídos (se assim quiser). Depois fazer o download ou partilhar normalmente.
`;
     jump_to = "Saltar para: ";
     weekendsOFF = "Fins-de-semana NÃO";
     weekendsON = "Fins-de-semana SIM";
     showschedule = "Mostrar horário";
     changeav = "Mudar disponibilidades";
     reset_button = "Reiniciar";
     sun = "Dom.";
     mon = "2ᵃ";
     tue = "3ᵃ";
     wed = "4ᵃ";
     thu = "5ᵃ";
     fri = "6ᵃ";
     sat = "Sab.";
     next_button = "Seguinte";
     prev_button = "Anterior";
     familynumlabel = "Número de Cuidadores: ";
     family = "Familia";
     create_schedule = "Criar horário";
     download_schedule = "Fazer download do horário";
     link_calendar = "Fazer link do calendário";
     link_copied = "Link copiado!";
  }

  if(lang=="fr"){
    explainer_link="https://docs.google.com/document/d/166Opj4We9-xDbvMKSbsetMd7FKsTa61I3xD0sKJS6xE/preview";
     explainer_button="Explication";
     instruction_button="Instructions"
     faq_link = "https://docs.google.com/document/d/1wNg-NMutSL8QGWRlfHHUXnGrimsyeEfjXaW5N31j8LE/preview";
     faq_button = "FAQ";//"Preguntas Frecuentes";
     forms_button = "Exemples de Formulaires";
     cccc = "Covid Childcare Coop Calculator";
     instructions_text = `Comment utiliser le CCCC

Famille 1:

Sélectionnez le nombre de familles dans la coopérative
Ecrivez votre nom dans le champ «Famille 1», puis cliquez sur la case colorée à côté
Marquez les jours sur le calendrier où vous n'êtes pas disponible. Pour marquer le même jour chaque semaine, cliquez sur le nom de ce jour. (Si vous n'êtes pas disponible le mardi, cliquez sur mardi.)
Lorsque vous avez terminé de marquer la disponibilité, cliquez sur le bouton "Lier le calendrier" en bas et il copiera automatiquement le lien généré pour que vous l'envoyiez à Family 2

Famille 2-X:

Ouvrez le lien que vous obtenez de la famille X-1
Ecrivez votre nom dans le champ «Famille X», puis cliquez sur la case colorée à côté
Marquez les jours sur le calendrier lorsque vous n'êtes pas disponible
Lorsque vous avez terminé de marquer la disponibilité, cliquez sur le bouton "Lier le calendrier" en bas et collez le lien copié automatiquement pour l'envoyer à la famille suivante

Dernière famille:

Une fois que tout le monde a indiqué sa disponibilité (chaque champ familial doit être rempli et toutes les couleurs représentées sur le calendrier), cliquez sur le bouton «Créer un planning» en bas
Le calendrier représente désormais un emploi du temps plus ou moins juste compte tenu de vos disponibilités. (Si pour une raison quelconque il ne vous plait pas, cliquez à nouveau sur le bouton "Créer" pour générer une autre version également juste, avec les mêmes restrictions)
Pour partager le calendrier, utilisez le bouton «Lier calendrier» pour créer un lien au calendrier, ou utilisez le bouton «Télécharger le calendrier» pour télécharger un fichier html de votre calendrier.

Dépannage:

Pour exclure ou inclure des jours de week-end, utilisez la bascule «Week-ends» en haut

Pour revenir en arrière et modifier le calendrier de disponibilité après avoir généré un calendrier, cliquez sur le bouton "Modifier la disponibilité" / "Afficher le calendrier" en haut

Pour modifier le calendrier final, sélectionnez les couleurs de la famille comme vous l'avez fait pour le calendrier de disponibilité et utilisez-les pour réassigner les jours planifiés (si vous le souhaitez), puis téléchargez ou partagez comme d'habitude
 Depois fazer o download ou partilhar normalmente.`;
     jump_to = "Passer À: ";
     weekendsOFF = "Weekends NON";
     weekendsON = "Weekends OUI";
     showschedule = "Montrer Calendrier";
     changeav = "Changer Mes Disponibilités";
     reset_button = "Réinitialiser";
     sun = "Lun";
     mon = "Mar";
     tue = "Mer";
     wed = "Jeu";
     thu = "Ven";
     fri = "Sam";
     sat = "Dim";
     next_button = "Suivante";
     prev_button = "Précédente";
     familynumlabel = "Nombre de Gardiens: ";
     family = "Famille";
     create_schedule = "Créer En Emploi du Temps";
     download_schedule = "Télécharger l'Horaire";
     link_calendar = "Lien à l'Emploi du Temps";
     link_copied = "Lien Copié!";
  }

  if(lang=="de"){
    explainer_link="https://docs.google.com/document/d/1rKLKgIZjznU3KJ0qU3DVXtPtFEYoM1cJ1Gx2K5SseaA/preview";
     explainer_button="Erkärung";
     instruction_button="Anleitung"
     faq_link = "https://docs.google.com/document/d/1MWa39-lXpkmlwxKshvz3zIhhwkYVY4x6Poi4mhkyvVw/preview";
     faq_button = "FAQ";
     forms_button = "Beispiel Form";
     cccc = "Covid Childcare Coop Calculator";
     instructions_text = `Wie man den CCCC anwendet

Familie 1:

Wählen Sie die Familien Anzahl des Co-op.
Fügen sie ihren Namen in das Feld Familie 1 hinzu und klicken sie daraufhin die farbige Taste daneben.
Tragen Sie bitte im Kalender ein an welchen Tagen die sie nicht verfügbar sind.
Um den gleichen Tag jede Woche zu markieren, klicken sie den Tag an ( wenn sie Dienstags nicht verfügbar sind klicken sie auf Dienstag).
Wenn sie fertig sind ihre Verfügbarkeit einzutragen, klicken auf  sie auf die “Verknüpfe  Kalender” Taste und es wird automatisch ihren erstellten Link an Familie 2 schicken.


Familie 2-X:

Öffnen sie den Link den sie von Familie x-1 bekommen haben.
Fügen sie ihren Namen in das “Familie X” Feld ein und klicken sie die bunte Box daneben an.
Markieren sie die Tage an dem sie nicht verfügbar sind.
Wenn sie fertig sind ihre Verfügbarkeit einzufügen, klicken sie auf den “Verknüpfe Kalender” Taste am Ende der Seite und fügen sie den Link ein um es an die nächste Familie zu senden.


Letzte Familie:

Nachdem jeder die Verfügbarkeit eingetragen hat (jede Familie sollte nun im Kalender stehen mit ihren farblichen Kennzeichen), klicken sie auf die “ Kalender erstellen” Taste am Ende der Seite. Der Kalender sollte nun einen vorläufigen Zeitplan anzeigen anhand ihrer Verfügbarkeit. (Wenn ihnen der Zeitplan nicht gefällt, klicken sie die “Herstellen” Taste um eine neue Option zu erstellen). Um den Kalender zu teilen, klicken  Sie auf die
“Kalender Teilen” Taste um einen Link herzustellen oder laden sie eine html Kopie des Kalenders herunter indem sie die “Kalender Herunterladen” Taste drücken.
`;
     jump_to = "Gehe zu: ";
     weekendsOFF = "Wochenenden NEIN";
     weekendsON = "Wochenenden JA";
     showschedule = "Terminplaner anzeigen";
     changeav = "Verügbarkeit";
     reset_button = "Zurücksetzen";
     sun = "Son";
     mon = "Mon";
     tue = "Di";
     wed = "Mi";
     thu = "Do";
     fri = "Fr";
     sat = "Sa";
     next_button = "Nächster";
     prev_button = "Vorheriger";
     familynumlabel = "Anzahl der Betreuer: ";
     family = "Familie";
     create_schedule = "Zeitplan erstellen";
     download_schedule = "Zeitplan herunterladen";
     link_calendar = "Verknüpfe Kalendar";
     link_copied = "Link kopiert!";
  }

  if(lang=="el"){
    explainer_link="https://docs.google.com/document/d/1Ky9T2_-H72UnducpC32p7-7LvCQgkxkQJdQKD_Elzt0/preview";
     explainer_button="Τι είναι;";
     instruction_button="Οδηγίες"
     faq_link = "https://docs.google.com/document/d/1xor-qv3y1Hs2sWvlWyfq9339K-s38rxsdTuTwGJFCdY/preview";
     faq_button = "FAQ";
     forms_button = "Φόρμες - παραδείγματα";
     cccc = "Covid Childcare Coop Calculator";
     instructions_text = `Πως χρησιμοποιείται το εργαλείο CCCC

Οικογένεια 1:

Διαλέξτε τον αριθμό οικογενειών στην ομάδα σας.
Συμπληρώστε το ονοματεπώνυμο σας εκεί που λέει Οικογένεια 1, και πατήστε το χρωματισμένο κουμπί με το στυλό στα δεξιά.
Σημειώστε τις ημέρες που δεν είστε διαθέσιμος/η στο ημερολόγιο. Για να διαλέξετε τις ίδιες μέρες κάθε εβδομάδα, πατήστε τα χρωματιστά κουμπιά με τις μέρες στην πιο πάνω γραμμή. Π.χ. Εάν δεν είστε διαθέσιμος/η ποτέ την Τρίτη, πατήστε το κουμπί που λέει “Τρίτη”.)
Όταν έχετε σημειώσει όλη σας την διαθεσιμότητα, πατήστε το κουμπί που λέει “Σύνδεση ημερολογίου” από κάτω, και αυτόματα θα δημιουργηθεί ένας σύνδεσμος που μπορείτε να στείλετε στην Οικογένεια 2.


Οικογένεια 2-Χ:

Ανοίξτε το σύνδεσμο που λάβατε από την Οικογένεια Χ-1.
Συμπληρώστε το ονοματεπώνυμό σας εκεί που λέει Οικογένεια Χ, και πατήστε το χρωματισμένο κουμπί με το στυλό στα δεξιά.
Σημειώστε τις ημέρες που δεν είστε διαθέσιμος/η στο ημερολόγιο.
Όταν έχετε σημειώσει όλη σας την διαθεσιμότητα, πατήστε το κουμπί που λέει “Σύνδεση ημερολογίου” από κάτω, και αυτόματα θα δημιουργηθεί ένας σύνδεσμος που μπορείτε να στείλετε στην επόμενη οικογένεια.


Τελευταία οικογένεια:

Όταν όλοι (από την πρώτη οικογένεια μέχρι την τελευταία οικογένεια) έχετε σημειώσει τη διαθεσιμότητά σας (και φαίνεται η διαθεσιμότητα του καθενός στο ημερολόγιο) πατήστε το κουμπί “Δημιουργία προγράμματος” από κάτω.
Το ημερολόγιο δείχνει ένα πρόγραμμα που κανονικά θα βολεύει όλους σας, βασισμένο στη διαθεσιμότητα του καθενός. (Εάν για οποιοδήποτε λόγο δεν σας αρέσει το πρόγραμμα που δημιουργήθηκε, πατήστε ξανά το κουμπί “Δημιουργία προγράμματος” και θα βγει άλλη εκδοχή με τους ίδιους παραμέτρους.)
Για να μοιραστείτε το ημερολόγιο, χρησιμοποιήστε το κουμπί “Σύνδεσμος ημερολογίου” για να δημιουργήσετε έναν σύνδεσμο, ή το κουμπί “Κατεβάστε το πρόγραμμα”.

Αντιμετώπιση προβλημάτων:
Για να εξαιρέσετε ή να περιλάβετε Σ/Κ, χρησιμοποιήστε το εργαλείο που λέει “Σ/Κ” που βρίσκεται στο πάνω μέρος της σελίδας.
Για να κάνετε αλλαγές αφού δημιουργήσετε ένα πρόγραμμα, πατήστε το κουμπί “Αλλαγή διαθεσιμότητας / Δείξτε το πρόγραμμα” στο πάνω μέρος της σελίδας.
Για να κάνετε αλλαγές στο τελικό πρόγραμμα, διαλέξτε χρώματα για κάθε οικογένεια όπως κάνατε για το πρόγραμμα διαθεσιμότητας, και χρησιμοποιήστε τα για να μοιραστούν αλλιώς οι ημέρες (εάν θέλετε), και μετά κατεβάστε το ή μοιράστε το κανονικά.
`;
     jump_to = "Πηγαίντε σε: ";
     weekendsOFF = "Σ/Κ Μη ενεργοποιημένα";
     weekendsON = "Σ/Κ Ενεργοποιημένα";
     showschedule = "Δείξτε το πρόγραμμα";
     changeav = "Άλλαξτε διαθεσιμότητα";
     reset_button = "Επαναφόρτωση";
     sun = "Κυρ";
     mon = "Δευ";
     tue = "Τρί";
     wed = "Τετ";
     thu = "Πέμ";
     fri = "Παρ";
     sat = "Σάβ";
     next_button = "Επόμενο";
     prev_button = "Προηγούμενο";
     familynumlabel = "Αριθμός φροντιστών: ";
     family = "Οικογένεια";
     create_schedule = "Δημιουγία προγράμματος";
     download_schedule = "Κατέβαστε το πρόγραμμα";
     link_calendar = "Σύνδεση ημερολογίου";
     link_copied = "Αντιγραφή συνδέσμου";
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
  document.getElementById("osun").innerHTML=sun;
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
