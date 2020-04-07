import React from "react";

const Instructions = ({ lang }) => (
  <>
    {lang.code === "en-US" && (
      <>
        <h3>How to use the CCCC</h3>
        <h4>Family 1:</h4>
        <p>Select the number of families in the co-op</p>
        <p>
          Enter your name in the “Family 1” field, then click the colored box
          next to it
        </p>
        <p>
          Mark the days on the calendar you are not available. To mark the same
          day every week, click the name of that day. (If you’re not available
          any Tuesdays, click Tuesday.)
        </p>
        <p>
          When you’re finished marking availability, click the “Link Calendar”
          button at bottom and it will automatically copy the generated link for
          you to send to Family 2
        </p>
        <h4>Family 2-X:</h4>
        <p>Open the link you get from Family X-1 </p>
        <p>
          Enter your name in the “Family X” field, then click the colored box
          next to it Mark the days on the calendar when you are not available
        </p>
        <p>
          When you’re finished marking availability, click the “Link Calendar”
          button at bottom and paste the automatically copied link to send it to
          the next family
        </p>
        <h4>Last family:</h4>
        <p>
          Once everyone has indicated their availability (every family field
          should be filled and all the colors represented on the calendar),
          click the “Create Schedule” button at bottom
        </p>
        <p>
          The calendar now represents an approximately fair schedule given your
          availabilities. (If for any reason you don’t like it, press the
          “Create” button again to generate a different fair option with the
          same restrictions)
        </p>
        <p>
          To share the calendar, use the “Link Calendar” button to create a link
          to the schedule, or use the “Download Schedule” button to download an
          html file of your schedule.
        </p>
        <h4>Troubleshooting:</h4>
        <p>
          To exclude or include weekend days, use the “Weekends” toggle at top
        </p>
        <p>
          To go back and modify the availability calendar after you’ve generated
          a schedule, click the “Change Availability”/”Show Schedule” toggle at
          top
        </p>
        <p>
          To modify the final schedule, select family colors as you did for the
          availability calendar and use them to reassign scheduled days (if you
          want to), then download or share as normal
        </p>
      </>
    )}
    {lang.code === "zh-CN" && (
      <>
        <h3>如何使用协作托儿日程生成器？</h3> <h4>1号家庭 </h4>
        <p>选择此协作社中的家庭数量</p>
        <p>在“1号家庭”一栏中输入您的名字，并点选旁边的颜色框</p>
        <p>
          在日历上标记出您无法承担托儿工作的日期。如需标记每周的同一天，请单击该天的名称（如您每星期二都有事，请单击星期二）
        </p>
        <p>
          当您完成标注后，请点击网页底部“链接日程”一栏，网页将自动复制日程表并生成链接，您可将自动复制的链接发送给2号家庭
        </p>
        <h4>2号家庭（此后的每个家庭可以此类推）</h4>
        <p>打开您从1号家庭（或前一个家庭）处获得的链接</p>
        <p>
          在“2号家庭”（或您家庭的标号）一栏中输入您的名字，并点选旁边的颜色框
        </p>
        <p>在日历上标记出您无法承担托儿工作的日期</p>
        <p>
          当您完成标注后，请点击网页底部“链接日程”一栏，网页将自动复制日程表并生成链接，您可将自动复制的链接发送给下一个家庭
        </p>
        <h4>最后一个填写日程的家庭</h4>
        <p>
          当所有人填写完毕后，请确认每个家庭栏都已被填写，所有的相关颜色都在日程表上有所体现。点击网页底部“创建日程”一栏生成日程表
        </p>
        <p>
          根据每个家庭的不同情况，这一日程表会在最大程度上公平分配托儿工作。如果您因任何原因不满意这份日程，您可以再次点击“创建日程”，生成同样条件下一份不同的日程表
        </p>
        <p>
          要分享此日程表，请点击“链接日程”一栏，生成新的表格链接。或点击“下载日程”一栏，获取此日程表的html格式副本
        </p>
        <h4>其它问题</h4>
        <p>如需包括或排除周末，请使用表格上方的“周末”按钮进行切换</p>
        <p>
          在生成日程表后，如需修改您的时间，请点击表格上方的“修改时间/展示日程”按钮进行切换
        </p>
        <p>
          如需修改最终日程，请点选各个家庭的代表颜色，并重新分配该家庭承担托儿工作的日期。您可重新下载和分享这一新的日程表
        </p>
      </>
    )}
    {lang.code === "es" && (
      <>
        <h4>Familia 1:</h4>
        <p>En la caja bajo del calendario</p>
        <p>Entra el número de familias en la cooperativa (maxima 7)</p>
        <p>
          Ponga su nombre en la casilla de “family 1”, haga click en la caja
          colorida al lado, cuando la caja aparece llena de color está marcando
          días por esta familia
        </p>
        <p>
          Marcas el día en el horario cuando no esté disponible. -- una banda de
          su color debe aparecer en el día cuando no está disponible
        </p>
        <p>
          Para marcar el mismo día cada semana haga clic en el nombre del día
          (si no está disponible en nigun Martes, haga clic en Martes)
        </p>
        <p>
          Cuando termina marcando la disponibilidad, haga clic el “Link
          Calendar” botón de abajo [el último] y el sistema genera
          automáticamente una enlace para mandar a la Familia 2. Esta enlace
          tendrá la información que Usted entró. Mande este link al número de
          teléfono, whatsapp, o correo electrónico de la próxima familia
        </p>
        <h4>Familia 2 a 6</h4>
        <p>Abre la enlace que recibe de la Familia anterior</p>
        <p>
          En la caja bajo el calendario, entra su nombre en la casilla que diga
          “Familia” [si es la 2nda entra en Familia 2, la 3ra Familia 3, etc],
          después, haga clic en la caja colorido al lado. Cuando esta caja está
          llena de color está marcando sus días
        </p>
        <p>
          En el calendario -- marque el días cuando no esté disponible -- una
          banda de su color debe aparecer en el día cuando no está disponible
        </p>
        <p>
          Cuando termina marcando la disponibilidad, haga clic el “Link
          Calendar” botón de abajo y el sistema genera automáticamente una
          enlace para mandar a la próxima Familia por whatsapp, mensajes, o
          correo electrónico.
        </p>
        <h4>Ultima Familia:</h4>
        <p>
          Cuando cada familia haya indicado su disponibilidad (cada casilla de
          familia debe ser llenado y todos los colores representado en el
          horario), haga clic en el botón de “crear horario” abajo.
        </p>
        <p>
          Ahora el horario muestra un horario aproximadamente justo dado sus
          disponibilidades (si por cualquier razón no le gusta, haga clic en el
          botón de “crear” otra vez para genera otra opción con las mismas
          restricciones)
        </p>
        <p>
          Para compartir el horario, use el “Enlace de Horario” abajo para crear
          un enlace al horario, o use el botón “descarga el horario” para
          descarga un archivo html de su horario
        </p>
        <h4>Solución de Problemas:</h4>
        <p>
          Para incluir o excluir los fin de semanas, use el botón “Fin de
          Semanas” arriba.
        </p>
        <p>
          Para retroceder y cambiar el calendario de disponibilidad, después de
          generar un horario, haga clic en el botón “cambiar disponibilidad”
          “mostrar horario” arriba.
        </p>
        <p>
          Para cambiar el horario final, seleccionar los colores de la familia
          como dice arriba
        </p>
      </>
    )}
    {lang.code === "pt" && (
      <>
        <h3>Instruções</h3>
        <h3>Como usar o CCCC</h3>

        <h4>Família 1:</h4>

        <p>Indicar o número de cuidadores/famílias do seu co-op.</p>
        <p>
          Inserir o seu nome no campo “Família 1,” depois clicar na caixa
          colorida ao lado.
        </p>
        <p>
          Assinalar os dias no calendário em que não está disponível. Para
          assinalar o mesmo dia para todas as semanas, clicar no nome desse dia
          (se não tiver disponibilidade à terça-feira, clicar em “Terça-feira”).
        </p>
        <p>
          Quando acabar de assinalar a indisponibilidade, clicar em “Fazer link
          do calendário” em baixo; o programa copiará automaticamente o link
          para depois poder mandá-lo à Família 2.
        </p>

        <h4>Família 2-X:</h4>

        <p>Abrir o link que recebeu de Família 1.</p>
        <p>
          Inserir o seu nome no campo “Família X”, depois clicar na caixa
          colorida ao lado.
        </p>
        <p>Assinalar os dias do calendário em que não está disponível.</p>
        <p>
          Quando acabar de marcar a indisponibilidade, clicar em “Fazer link do
          calendário” em baixo e colar o link (automaticamente copiado) para
          mandar à próxima família.
        </p>

        <h4>Última família:</h4>

        <p>
          Depois de todos marcarem a sua indisponibilidade (todos os campos
          “Família” devem estar cheios e todas a cores representadas no
          calendário), clicar em “Criar horário” em baixo.
        </p>
        <p>
          O calendário agora mostra um horário aproximadamente justo conforme as
          vossas disponibilidades. (Se por alguma razão não gostar do horário,
          clicar em “Criar horário” outra vez para gerar outra opção justa com
          as mesmas restrições).
        </p>

        <p>
          Para partilhar o calendário, clicar em “Fazer link do calendário” para
          criar um link do horário, ou usar “Fazer download do horário” para
          receber um ficheiro HTML do seu horário.
        </p>

        <h4>Soluções de problemas:</h4>

        <p>
          Para incluir ou excluir os fins-de-semana, usar a opção
          “Fins-de-semana SIM/NÃO.”
        </p>

        <p>
          Para voltar a modificar o calendário de disponibilidade depois de ter
          criado um horário, clicar em “Mostrar horário/Mudar disponibilidades”
          em cima.
        </p>

        <p>
          Para modificar o horário final, seleccionar cores para as famílias
          como fez para o calendário de disponibilidades e use-as para mudar os
          dias atribuídos (se assim quiser). Depois fazer o download ou
          partilhar normalmente.
        </p>
      </>
    )}
    {lang.code === "de" && (
      <>
        <h3>Wie man den CCCC anwendet</h3>

        <h4>Familie 1:</h4>

        <p>Wählen Sie die Familien Anzahl des Co-op.</p>
        <p>
          Fügen sie ihren Namen in das Feld Familie 1 hinzu und klicken sie
          daraufhin die farbige Taste daneben.
        </p>
        <p>
          Tragen Sie bitte im Kalender ein an welchen Tagen die sie nicht
          verfügbar sind.
        </p>
        <p>
          Um den gleichen Tag jede Woche zu markieren, klicken sie den Tag an (
          wenn sie Dienstags nicht verfügbar sind klicken sie auf Dienstag).
        </p>
        <p>
          Wenn sie fertig sind ihre Verfügbarkeit einzutragen, klicken auf sie
          auf die “Verknüpfe Kalender” Taste und es wird automatisch ihren
          erstellten Link an Familie 2 schicken.
        </p>

        <h4>Familie 2-X:</h4>

        <p>Öffnen sie den Link den sie von Familie x-1 bekommen haben.</p>
        <p>
          Fügen sie ihren Namen in das “Familie X” Feld ein und klicken sie die
          bunte Box daneben an.
        </p>
        <p>Markieren sie die Tage an dem sie nicht verfügbar sind.</p>
        <p>
          Wenn sie fertig sind ihre Verfügbarkeit einzufügen, klicken sie auf
          den “Verknüpfe Kalender” Taste am Ende der Seite und fügen sie den
          Link ein um es an die nächste Familie zu senden.
        </p>

        <h4>Letzte Familie:</h4>

        <p>
          Nachdem jeder die Verfügbarkeit eingetragen hat (jede Familie sollte
          nun im Kalender stehen mit ihren farblichen Kennzeichen), klicken sie
          auf die “ Kalender erstellen” Taste am Ende der Seite. Der Kalender
          sollte nun einen vorläufigen Zeitplan anzeigen anhand ihrer
          Verfügbarkeit. (Wenn ihnen der Zeitplan nicht gefällt, klicken sie die
          “Herstellen” Taste um eine neue Option zu erstellen). Um den Kalender
          zu teilen, klicken Sie auf die “Kalender Teilen” Taste um einen Link
          herzustellen oder laden sie eine html Kopie des Kalenders herunter
          indem sie die “Kalender Herunterladen” Taste drücken.
        </p>

        <h4>Problembehebung:</h4>

        <p>
          Um Wochenenden hinzu - oder ausfügen, benutzen sie den “Wochende”
          Schalter am Anfang der Seite.
        </p>

        <p>
          Um den Kalender zu bearbeiten und ihre Verfügbarkeit zu ändern nachdem
          sie es hergestellt haben, klicken sie auf die “ Verfügbarkeit
          ändern”/”Zeitplan anzeigen” Taste am Anfang der Seite.
        </p>

        <p>
          Um den endgültigen Zeitplan zu ändern, wählen sie die Familien Farben
          die sie auch für ihre Verfügbarkeit ausgesucht haben und teilen sie
          ihre eingetragenen Tage neu auf. Dann laden sie es herunter oder
          teilen sie es wie sonst auch.
        </p>
      </>
    )}
    {lang.code === "el" && (
      <>
        <h3>Πως χρησιμοποιείται το εργαλείο CCCC</h3>

        <h4>Οικογένεια 1:</h4>

        <p>Διαλέξτε τον αριθμό οικογενειών στην ομάδα σας.</p>
        <p>
          Συμπληρώστε το ονοματεπώνυμο σας εκεί που λέει Οικογένεια 1, και
          πατήστε το χρωματισμένο κουμπί με το στυλό στα δεξιά.
        </p>
        <p>
          Σημειώστε τις ημέρες που δεν είστε διαθέσιμος/η στο ημερολόγιο. Για να
          διαλέξετε τις ίδιες μέρες κάθε εβδομάδα, πατήστε τα χρωματιστά κουμπιά
          με τις μέρες στην πιο πάνω γραμμή. Π.χ. Εάν δεν είστε διαθέσιμος/η
          ποτέ την Τρίτη, πατήστε το κουμπί που λέει “Τρίτη”.)
        </p>
        <p>
          Όταν έχετε σημειώσει όλη σας την διαθεσιμότητα, πατήστε το κουμπί που
          λέει “Σύνδεση ημερολογίου” από κάτω, και αυτόματα θα δημιουργηθεί ένας
          σύνδεσμος που μπορείτε να στείλετε στην Οικογένεια 2.
        </p>

        <h4>Οικογένεια 2-Χ:</h4>

        <p>Ανοίξτε το σύνδεσμο που λάβατε από την Οικογένεια Χ-1.</p>
        <p>
          Συμπληρώστε το ονοματεπώνυμό σας εκεί που λέει Οικογένεια Χ, και
          πατήστε το χρωματισμένο κουμπί με το στυλό στα δεξιά.
        </p>
        <p>Σημειώστε τις ημέρες που δεν είστε διαθέσιμος/η στο ημερολόγιο.</p>
        <p>
          Όταν έχετε σημειώσει όλη σας την διαθεσιμότητα, πατήστε το κουμπί που
          λέει “Σύνδεση ημερολογίου” από κάτω, και αυτόματα θα δημιουργηθεί ένας
          σύνδεσμος που μπορείτε να στείλετε στην επόμενη οικογένεια.
        </p>

        <h4>Τελευταία οικογένεια:</h4>

        <p>
          Όταν όλοι (από την πρώτη οικογένεια μέχρι την τελευταία οικογένεια)
          έχετε σημειώσει τη διαθεσιμότητά σας (και φαίνεται η διαθεσιμότητα του
          καθενός στο ημερολόγιο) πατήστε το κουμπί “Δημιουργία προγράμματος”
          από κάτω.
        </p>
        <p>
          Το ημερολόγιο δείχνει ένα πρόγραμμα που κανονικά θα βολεύει όλους σας,
          βασισμένο στη διαθεσιμότητα του καθενός. (Εάν για οποιοδήποτε λόγο δεν
          σας αρέσει το πρόγραμμα που δημιουργήθηκε, πατήστε ξανά το κουμπί
          “Δημιουργία προγράμματος” και θα βγει άλλη εκδοχή με τους ίδιους
          παραμέτρους.)
        </p>
        <p>
          Για να μοιραστείτε το ημερολόγιο, χρησιμοποιήστε το κουμπί “Σύνδεσμος
          ημερολογίου” για να δημιουργήσετε έναν σύνδεσμο, ή το κουμπί
          “Κατεβάστε το πρόγραμμα”.
        </p>

        <h4>Αντιμετώπιση προβλημάτων:</h4>

        <p>
          Για να εξαιρέσετε ή να περιλάβετε Σ/Κ, χρησιμοποιήστε το εργαλείο που
          λέει “Σ/Κ” που βρίσκεται στο πάνω μέρος της σελίδας.
        </p>

        <p>
          Για να κάνετε αλλαγές αφού δημιουργήσετε ένα πρόγραμμα, πατήστε το
          κουμπί “Αλλαγή διαθεσιμότητας / Δείξτε το πρόγραμμα” στο πάνω μέρος
          της σελίδας.
        </p>

        <p>
          Για να κάνετε αλλαγές στο τελικό πρόγραμμα, διαλέξτε χρώματα για κάθε
          οικογένεια όπως κάνατε για το πρόγραμμα διαθεσιμότητας, και
          χρησιμοποιήστε τα για να μοιραστούν αλλιώς οι ημέρες (εάν θέλετε), και
          μετά κατεβάστε το ή μοιράστε το κανονικά.
        </p>
      </>
    )}
    {lang.code === "hi" && (
      <>
        <h3>CCCC का उपयोग कैसे करें</h3>

        <h4>परिवार 1:</h4>

        <p>सहकारिता में परिवारों की संख्या का चयन करें</p>
        <p>
          "परिवार 1" फ़ील्ड में अपना नाम दर्ज करें, फिर उसके बगल में रंगीन बॉक्स
          पर क्लिक करें
        </p>
        <p>
          कैलेंडर पर उन दिनों को चिह्नित करें जो आप उपलब्ध नहीं हैं। हर हफ्ते
          उसी दिन को चिह्नित करने के लिए, उस दिन के नाम पर क्लिक करें। (यदि आप
          कोई मंगलवार उपलब्ध नहीं हैं, तो मंगलवार पर क्लिक करें।)
        </p>
        <p>
          जब आपने मार्किंग की उपलब्धता पूरी कर ली है, तो नीचे दिए गए "लिंक
          कैलेंडर" बटन पर क्लिक करें और यह आपके द्वारा फैमिली 2 को भेजने के लिए
          जनरेट किए गए लिंक को स्वचालित रूप से कॉपी कर देगा।
        </p>

        <h4>परिवार 2-X:</h4>

        <p>परिवार X-1 से आपको प्राप्त लिंक खोलें</p>
        <p>
          "परिवार एक्स" फ़ील्ड में अपना नाम दर्ज करें, फिर उसके बगल में रंगीन
          बॉक्स पर क्लिक करें
        </p>
        <p>कैलेंडर पर उन दिनों को चिह्नित करें जब आप उपलब्ध नहीं हैं</p>
        <p>
          जब आपने मार्किंग की उपलब्धता पूरी कर ली है, तो नीचे दिए गए "लिंक
          कैलेंडर" बटन पर क्लिक करें और स्वचालित रूप से कॉपी किए गए लिंक को अगले
          परिवार को भेजने के लिए पेस्ट करें
        </p>

        <h4>अंतिम परिवार:</h4>

        <p>
          एक बार जब सभी ने अपनी उपलब्धता का संकेत कर दिया (प्रत्येक पारिवारिक
          क्षेत्र को भरा जाना चाहिए और कैलेंडर पर सभी रंगों का प्रतिनिधित्व किया
          जाना चाहिए), नीचे "शेड्यूल बनाएं" बटन पर क्लिक करें
        </p>
        <p>
          कैलेंडर अब आपके लाभ को देखते हुए लगभग उचित अनुसूची का प्रतिनिधित्व
          करता है। (यदि आप किसी भी कारण से इसे पसंद नहीं करते हैं, तो समान
          प्रतिबंधों के साथ एक अलग उचित विकल्प उत्पन्न करने के लिए फिर से
          "बनाएँ" बटन दबाएं)
        </p>
        <p>
          कैलेंडर को साझा करने के लिए, शेड्यूल का लिंक बनाने के लिए "लिंक
          कैलेंडर" बटन का उपयोग करें, या अपने शेड्यूल की HTML फ़ाइल डाउनलोड करने
          के लिए "डाउनलोड शेड्यूल" बटन का उपयोग करें।
        </p>

        <h4>समस्या निवारण:</h4>

        <p>
          सप्ताहांत के दिनों को बाहर करने या शामिल करने के लिए, शीर्ष पर
          "सप्ताहांत" टॉगल करें (To exclude or include weekend days, use the
          “Weekends” toggle at top)
        </p>

        <p>
          शेड्यूल उत्पन्न करने के बाद उपलब्धता कैलेंडर को वापस जाने और संशोधित
          करने के लिए, शीर्ष पर "उपलब्धता बदलें" / "शेड्यूल दिखाएं" पर क्लिक
          करें
        </p>

        <p>
          अंतिम अनुसूची को संशोधित करने के लिए, परिवार के रंगों का चयन करें जैसा
          कि आपने उपलब्धता कैलेंडर के लिए किया था और उन्हें निर्धारित दिनों (यदि
          आप चाहते हैं) को फिर से असाइन करने के लिए उपयोग करें, तो सामान्य रूप
          से डाउनलोड या साझा करें
        </p>
      </>
    )}
  </>
);

export default Instructions;
