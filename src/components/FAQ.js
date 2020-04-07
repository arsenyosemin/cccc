import React from "react";
const FAQ = ({ lang }) => (
  <>
    {lang.code === "en-US" && (
      <>
        <h4>What is the Covid Childcare Co-op Creator?</h4>

        <p>
          The CCCC is a simple tool that allows groups of parents and other
          caregivers to automatically generate a fairly distributed cooperative
          childcare schedule given each adult's availability. With schools
          shutting down indefinitely and extending few or no resources to
          caregivers, childcare co-ops balance resource constraints ($$$ and
          time) with the need to limit our gatherings.
        </p>

        <h4>What's a childcare co-op?</h4>

        <p>
          It's when caregivers agree to share the burden of watching a kid or
          kids. Instead of (say) five parents watching one kid each every day of
          the week, each of them watches five kids on one day of the week. Or
          (say) three families agree to trade off watching one kid for the month
          because the kid's primary caregiver can't get time off. Co-ops can get
          way more complex than that (up to and including full schools), but
          we're designing for the simplest, smallest versions (for obvious
          reasons).
        </p>

        <h4>How do I use the CCCC?</h4>

        <p>
          <strong>First</strong>, find the other caregivers you're going to work
          with. This is not a social network. <strong>Second</strong>, fill out
          the calendar with the days when each provider is not available. (Share
          a schedule in process with the "Shareable Link" button).{" "}
          <strong>Third</strong>, once everyone's availability is entered,
          create your schedule by pressing the "Create Schedule" button.{" "}
          <strong>Fourth</strong>, modify your schedule however you see fit.
          Look out for any gap days when no one has said they're available!{" "}
          <strong>Fifth</strong>, share your schedule with the rest of the
          co-op, using the shareable link or download a copy with the "Download
          Schedule" button.
        </p>

        <h4>So I mark when I'm not available?</h4>

        <p>Yes, mark when you're not available.</p>

        <h4>
          One of my co-op members is a nurse and they have to work M-F, how can
          we include them in the CCCC schedule?
        </h4>

        <p>
          Perhaps the biggest problem with school shutdowns as an epidemic
          response is that they leave some critical health care workers stuck at
          home looking after children when they're desperately needed at their
          jobs. The point of the CCCC is to share the hosting burden fairly
          according to people's availability, but you don't need to be on the
          schedule to be part of the co-op. If a co-op member has no
          availability, they don't need to fill out the calendar. Think of it as
          a hosting schedule and make sure they get a copy. The CCCC's
          operational principle is "from each according to their availability,
          to each according to their needs."
        </p>

        <h4>What if there's a day when no one is available?</h4>

        <p>
          You'll have to solve that one among yourselves, but the scheduler will
          alert you to when those days are.
        </p>

        <h4>Why is it limited to seven families?</h4>

        <p>
          Based on the guidance we've all received regarding group gatherings,
          if you have eight families (and can manage it) you're probably better
          off splitting into two groups of four. Really you should be keeping
          the groups as small as possible, but we recognize that there's a range
          of what's possible out there.
        </p>

        <h4>What do you do with our data? What's the privacy policy?</h4>

        <p>
          The CCCC doesn't store any of your data, so you don't have to worry
          about us running an experiment on you or selling your info to
          educational websites or anything like that. The only place your CCCC
          data lives is the shareable url that you send within your co-op. (Yes,
          it's in the url!) That way you can share your information easily, but
          no one else has it, not even us.
        </p>

        <h4>
          Why can't I link my Google calendar? Can't I do this with Google?
        </h4>

        <p>
          Yes! And if you want to, you totally should, or whatever other online
          service you want to use. The CCCC is a simple, dedicated tool designed
          to prompt caregivers to think about collective childcare and reduce
          the barriers to entry. It is not a new killer app or a digital
          communications company. If you want to find tools with more features
          to plan your co-op, they're easy to track down. We'll count that as a
          win.
        </p>

        <h4>
          Can we modify our schedule if we want to? Switch or substitute days?
        </h4>

        <p>
          Yes! CCCC is not an oracle, it just tries to generate a fairly
          distributed four weeks. You should feel more than free to change the
          result with your group however you'd like. Once the schedule is
          generated, you can switch colors the same way you did in the first
          step before you share it. Then you can download or share it like
          normal.
        </p>

        <h4>Is this legal?</h4>

        <p>
          If you're concerned with state licensing requirements, we encourage
          you to{" "}
          <a href="https://www.co-oplaw.org/co-op-basics/types/childcare-cooperatives/">
            check out this page
          </a>{" "}
          from the Sustainable Economies Law Center which lays out the situation
          and offers some guidance. Their short answer is not to worry about it
          too much if you're not planning something commercial.
        </p>

        <h4>
          Wouldn't joining a co-op increase my exposure, relative to staying
          home alone with my kids?
        </h4>

        <p>
          That's tough, because on some level the answer is obviously yes: The
          fewer interactions you can manage, the better your chances of avoiding
          the virus. But we know that not every caregiver is available to
          supervise every day, and that school shutdowns present a severe
          hardship for some families. Small co-ops maintain compliance with the
          directives to avoid gatherings while still treating childcare as a
          collective responsibility, which as a society we cannot afford to give
          up on as soon as things get tough. Accepting a little more
          risk/hardship to make sure the costs don't land on just a few families
          is what living together is all about. And in the medium term, making
          sure our health system (and other essential systems like trash and
          fire) is at full capacity is an important part of handling the
          infection curve, and to do that we need collective childcare options.
        </p>

        <p>
          None of this is a substitute for the latest medical advice, and{" "}
          <u>please don't care for other people's kids if you're sick!</u>
        </p>

        <h4>Where can I learn more about childcare cooperatives?</h4>

        <p>
          The book Bringing Families Together: A Guide to Parent Cooperatives by
          E. Kim Coontz (prepared for the University of California Center for
          Cooperatives) is the most comprehensive resource, and it's available
          as a free pdf in four parts:{" "}
          <a href="http://cccd.coop/bringing-families-together-part-i">
            Part 1
          </a>;{" "}
          <a href="http://cccd.coop/bringing-families-together-part-ii">
            Part 2
          </a>;{" "}
          <a href="http://cccd.coop/bringing-families-together-part-iii">
            Part 3
          </a>;{" "}
          <a href="http://cccd.coop/bringing-families-together-part-iv">
            Part 4
          </a>.
        </p>
      </>
    )}
    {lang.code === "es" && (
      <>
        <h4>Preguntas Frecuentes</h4>

        <h4>Que es la Covid Calculadora Cooperativa de Cuidado (CCCC)</h4>
        <p>
          La CCCC es una herramienta simple que permite grupos de padres y otros
          cuidadores generar de manera automática un horario de cuidado infantil
          distribuido justamente y basado en la disponibilidad de los adultos.
          Con el cierre indefinida de las escuelas y la falta de recursos para
          cuidadoras, un cooperativo de cuidado/guardería harmoniza la falta de
          recursos (dinero y tiempo) con la necesidad de limitar nuestras
          reuniones.
        </p>

        <h4>Que es un cooperativa de cuidado?</h4>
        <p>
          Es cuando cuidadores coinciden en compartir el peso de cuidar un/a
          niño/a o unos/as niños/as. En vez de (por ejemplo) cinco padres
          cuidando un/a niño/a cada día de la semana, cada padre/individual
          cuida cinco niños un día de la semana. O (por ejemplo) tres familias
          coinciden en cuidar por un niño en turno por un mes por porque la
          cuidadora principal no puede tomarse días libres. Cooperativas pueden
          ser mucho más complejo que esto (incluir escuelas), pero hemos hecho
          esto para la versión más simple y pequeña (por razones obvias).
        </p>

        <h4>Como puedo usar la CCCC?</h4>
        <p>
          Primero, encuentra otros cuidadores con quien va a trabajar. Puede ser
          de su comunidad, escuela, trabajo, etc. Hay espacio por un máximo de 7
          familias en cada cooperativa. Segundo, llenar el calendario con los
          días cuando cada cuidador no está disponible. Comparte el calendario
          con las otras familias. Tercero, cuando cada familia/cuidador ha
          puesto su disponibilidad crea un horario con el botón “Crear horario.”
          Cuarto cambiar su horario como sea necesario, busca por cualquier día
          cuando nadie ha dicho que está disponible! Quinto compartes su horario
          con lo de más en la cooperativa usando el enlace generado o descargar
          una copia con el botón de “descarga horario”
        </p>
        <p>[Más información el la sección de instrucciones]</p>

        <h4>Entonces, marco cuando no estoy disponible?</h4>
        <p>Si, marca cuando no está disponible</p>

        <h4>
          Un miembro de mi cooperativa es una enfermera y ella trabaja de lunes
          a viernes, cómo podemos incluir a ella en el horario de la CCCC?
        </h4>
        <p>
          Quizás el problema más serio con el cierre de las escuelas como parte
          de la respuesta a una epidemia es que algunos trabajadores de salud
          tienen que quedar en casa para cuidar los niños cuando se necesita su
          mano de obra en el trabajo. El propósito de la CCCC es compartir
          justamente el trabajo de cuidar para los hijos, basado en la
          disponibilidad, pero no es necesario ser presente en el horario para
          participar en la cooperativa. Piensa en lo como horario de anfitrión y
          asegura que ella recibe una copia. La principal operativa de la CCCC
          es “de cada cual según su capacidades, a cada cual según sus
          necesidades.”
        </p>

        <h4>Qué pasa si hay un día cuando nadie está disponible?</h4>
        <p>
          Tienen que resolver esto entre ustedes mismos, pero el herramienta les
          alerta cuando hay uno de estos días.
        </p>

        <h4>Por que hay un límite de 7 familias?</h4>
        <p>
          Basado en la información hemos recibido sobre los reuniones en grupo,
          si tienes ocho familias (y lo puede acomodarlo), sería mejor hacer dos
          grupos de cuatro. Debemos mantener los grupos lo más chiquito que sea
          posible, pero sabemos que todos tenemos distintos capacidades.
        </p>

        <h4>Que hace con nuestros datos? Que es la política de privacidad?</h4>
        <p>
          La CCCC no guarda ningún dato personal, no tiene que preocupar que
          vamos a hacer experimentaciones con su datos ni venderlo a un sitio de
          web ni nada. El único lugar donde se queda su información está en la
          enlace de compartir que manda dentro de la cooperativa (sí! está en el
          URL!) De esta manera puede compartir fácilmente su información pero
          nadie más lo tiene, incluso nosotros.
        </p>

        <h4>
          Porque no puedo conectarla a mi Google Calendar? No lo puedo hacer con
          Google?
        </h4>
        <p>
          Si! Y si lo quiere lo debe hacer, o cualquier otro servicio en línea
          que quiere usar. La CCCC es un herramienta fácil, dedicado y designada
          para ayudar a las y los cuidadores a pensar en la guardería colectiva
          y desmantelar las barreras a la participación. No es un nuevo app ni
          empresa de comunicaciones digitales. Si quiere encontrar herramientas
          con más características para planear la cooperativa, son fácil de
          encontrar. Pensamos en esto como una victoria.
        </p>

        <h4>
          Es posible modificar nuestro horario si queremos hacerlo? Cambiar o
          sustituir días?
        </h4>
        <p>
          Sí! La CCCC no es un oráculo, simplement intenta generar un horario
          justo por cuatro semanas. Debe sentir libre a cambiar como quieres los
          resultados con su grupo. Cuando el horario ha sido generado, puedes
          cambiar los colores en la misma manera que lo hizo en el primer paso
          antes de compartirlo. Después lo puedes descargar y compartirlo de la
          misma manera.
        </p>

        <h4>Esto es legal?</h4>
        <p>
          Si está preocupado por los requisitos estatales de licencia, busca a
          este página de la Sustainable Economies Law Center que explica la
          situación y ofrece sugerencias y una guía. La respuesta corta es no
          preocupar mucho si no intenta crear un establecimiento comercial.
        </p>

        <h4>
          Pertenecer a una cooperativa no puede incrementar mi exposición, en
          comparación con quedarme en casa solo con mis niños?
        </h4>
        <p>
          Es difícil porque la respuesta por algún nivel, obviamente es sí:
          menos interacciones mejor probabilidad de evadir el virus. Pero
          sabemos que cada cuidadora no está disponible para supervisar cada
          día, y que el cierre de las escuelas causa dificultades para algunas
          familias. Cooperativas pequeñas obedecen las directivas para evadir
          reuniones mientras tratado el cuido de los niños como una
          responsabilidad colectiva--como sociedad no podemos darse por vencido
          cuando las cosas son difíciles. Esto implica aceptando un poco más
          riesgo / dificuldades para asegurar que el peso no cae solamente en
          algunos familias. En el tiempo medio, asegurar que nuestro sistema de
          salud (y otros servicios claves como la basura y bomberos) están en su
          capacidad máximo es un parte importante de abordar la curva de
          infección, para hacerlo necesitamos opciones colectivos para cuidar
          los y las hijos y hijas.
        </p>

        <p>
          Nada de esto es un sustituto para consejas médicas, por favor no cuida
          los hijos de los otros si está enferma!
        </p>

        <h4>
          Donde puedo aprender más sobre las cooperativas de cuido infantil?
        </h4>
        <p>
          El libro en íngles Bringing Families Together: A Guide to Parent
          Cooperatives by E. Kim Coontz (prepared for the University of
          California Center for Cooperatives) es lo más comprehensivo:{" "}
          <a href="http://cccd.coop/bringing-families-together-part-i">
            Part 1
          </a>;{" "}
          <a href="http://cccd.coop/bringing-families-together-part-ii">
            Part 2
          </a>;{" "}
          <a href="http://cccd.coop/bringing-families-together-part-iii">
            Part 3
          </a>;{" "}
          <a href="http://cccd.coop/bringing-families-together-part-iv">
            Part 4
          </a>. Buscamos más recursos en español pronto!
        </p>
      </>
    )}
    {lang.code === "zh-CN" && (
      <>
        <h4>常见问题答疑</h4>

        <h4>问：什么是协作托儿日程生成器（CCCC）？</h4>

        <p>
          答：这是一个简单的工具，帮助家长和其他看护者组成的协作小组，根据各位成年人不同的时间精力，自动生成一个公平分配的协作托儿日程表。在学校无限期关闭，看护者几乎或完全无法获得支持的情况下，协作托儿试图在有限的资源、金钱、时间与减少集会的需求之间取得平衡。
        </p>

        <h4>问：什么是协作托儿？</h4>

        <p>
          答：家长和其他看护者分担看护一个或多个孩子的工作。譬如在一周五天中，相比起五位家长每天在家分别看护一个孩子，不如让每位家长每周一天在家看护五个孩子。或者说，三个家庭同意在一个月中共同分担看护一个孩子的责任，因为这个孩子的主要监护人无法休假在家。当然协作的方式可以复杂得多，甚至覆盖整个学校的孩子。出于明显的原因，我们设计的日程生成器是为了最简单和小规模的协作。
        </p>

        <h4>问：如何使用协作托儿日程生成器？</h4>

        <p>
          答：首先，找到您愿意一起协作的家长和看护者。这个生成器没有社交网络的功能。其二，每位看护者在日程表上填写出他/她无法承担托管工作的日期，在这一过程中使用分享链接的方式协作。其三，当每个人填写日程后，使用“创建日程”按钮生成一份日程总表。其四，依照需求修改日程表，尤其需要注意的是所有人都无法承担托管工作的日期。其五，使用分享链接，或“下载日程”按钮，将日程表分享给协作小组中的其他人。
        </p>

        <h4>问：所以我应该标出无法承担托管工作的日期？</h4>

        <p>答：没错，标出您没有空闲时间的日期。</p>

        <h4>
          问：我的协作小组中有人是护士，必须每周五天工作。我们如何将他/她纳入协作日程？
        </h4>

        <p>
          答：作为一种流行病应对措施，学校停课的最大问题可能是导致一些重要的医护人员在急需工作的时候不得不留在家里照顾孩子。
          协作托儿日程生成器的目的是根据人们的时间精力合理分担托儿工作，但是协作成员不需要都在这份日程表上。如果某位成员没有时间，您可将这份日程视为一个儿童托管计划，并确保这些成员拥有这份日程。它的的运作原则是各尽所能、各取所需。
        </p>

        <h4>问：如果有些时候没人能承担看护工作怎么办？</h4>

        <p>答：您需要在小组中自行协调。生成器会提醒您这些日期。</p>

        <h4>问：为什么参与的家庭上限是七个？</h4>

        <p>
          答：根据我们获得的关于聚众集会的建议，如果有八个家庭愿意参与，或许更好的方式是分为两个小组，四个家庭一组。这些协作小组应当越小越好，但我们也同样意识到实际操作中需要一定范围和灵活度。
        </p>

        <h4>问：我们的数据怎么办？你们的保密协议是什么？</h4>

        <p>
          答：我们不存储您的任何数据，您无需担心我们将您的数据用作实验或销售给教育类网站。您在CCCC中输入的数据仅存在与您与协作小组内部的分享链接中。没错，仅仅是这个链接，在便于您与他人分享信息的同时，确保包括我们在内的任何人都无法获得您的数据。
        </p>

        <h4>问：我为什么不能用谷歌日历？</h4>

        <p>
          答：当然可以，如果您愿意的话，您可以使用任何其它网络服务。CCCC是一个简单的工具，其目的是帮助家长和看护者思考如何共同托儿，并降低启动门槛。它不是一个新的热门app，也不是数字通讯公司。如果您需要功能更多的工具安排协作，网络上同样有许多容易找到的资源，这对我们而言也是双赢。
        </p>

        <h4>问：这合法吗？</h4>

        <p>
          答：如果您对获得所在州许可有所疑问，请参照可持续经济法律中心（Sustainable
          Economies Law Center）的<a href="https://www.co-oplaw.org/co-op-basics/types/childcare-cooperatives/">
            页面
          </a>（仅有英语及西班牙语），其中提供了一些情况和指导。简而言之，如果协作不涉及商业行为，则不需要太担心。
        </p>

        <h4>问：比起和孩子呆在家里，加入协作社难道不会提高我的暴露风险吗？</h4>

        <p>
          答：这个问题很难回答。在某种程度上来说，答案显而易见是肯定的。您与别人的接触越少，避免染病的几率就越大。但是我们同样知道，并不是每位家长或看护人都可以每天照顾孩子，学校停课也对许多家庭造成了严重的困难。小型协作组织在遵守公共指示、避免聚会的同时，仍将儿童保育工作视为集体的共同责任。作为一个社会，当情况变得艰难时，我们不能轻易放弃这一点。共同生存，意味着我们需要承担多一点的风险或困难，以确保负担和代价不会只落在少数家庭身上。从中期来看，确保卫生系统（以及环卫和火险等其它基本系统）能够满负荷运转，是控制感染曲线的重要一环。为此，我们需要共同承担托儿和照管的工作。
        </p>

        <p>
          当然，这些都不能替代最新的医疗卫生建议。如果您生病了，请不要照顾别人的孩子！
        </p>

        <h4>问：我可以在哪里获得更多关于协作托儿的信息？</h4>

        <p>
          答：由加州大学合作社研究中心出版、E. Kim
          Coontz撰写的《将家庭聚在一起：父母协作社指南》提供了最全面的资源。此书分成四个部分，可点击以下链接分别下载pdf：
          <a href="http://cccd.coop/bringing-families-together-part-i">
            Part 1
          </a>;{" "}
          <a href="http://cccd.coop/bringing-families-together-part-ii">
            Part 2
          </a>;{" "}
          <a href="http://cccd.coop/bringing-families-together-part-iii">
            Part 3
          </a>;{" "}
          <a href="http://cccd.coop/bringing-families-together-part-iv">
            Part 4
          </a>. （仅有英语）。
        </p>
      </>
    )}
    {lang.code === "pt" && (
      <>
        <h4>Perguntas frequentes</h4>

        <h4>O que é o Covid Childcare Co-op Creator?</h4>

        <p>
          O CCCC é uma ferramenta simples que gera de forma automática um
          horário cooperativo para o cuidado infantil, facilitando assim a
          organização dos pais e de outros/as cuidadores/as. O horário é
          distribuído de forma justa consoante a disponibilidade de cada adulto.
          Com as escolas a fechar indefinidamente e com estas a estender poucos
          e em alguns casos nenhuns recursos a profissionais dos cuidados
          infantis, programas cooperativos como este equilibram o
          constrangimento de recursos (dinheiro e tempo) com a necessidade de
          evitar os ajuntamentos.
        </p>

        <h4>O que é um co-op de cuidados infantis?</h4>

        <p>
          É quando as famílias/cuidadores partilham a responsabilidade de cuidar
          de uma ou várias crianças. Em vez de (por exemplo) cinco pais cuidarem
          cada um/a de uma criança todos os dias da semana, cada um/a deles/as
          cuida de cinco crianças um dia por semana. Ou (por exemplo) três
          famílias concordam cuidar de uma criança cada mês porque o/a
          cuidador/a dessa criança não pode deixar de trabalhar. Um co-op
          consegue ser muito mais complexo que isso (até existem para escolas
          inteiras), mas estamos a pensar nas opções mais simples e pequenas,
          por razões óbvias.
        </p>

        <h4>Como usar o CCCC?</h4>

        <p>
          Primeiro, encontre os/as outros/as cuidadores/as com quem quer
          trabalhar. Isto não é uma rede social. Em seguida, preencha o
          calendário com os dias em que cada pessoa não está disponível
          (Partilhe um horário com o botão “Link partilhável”). Quando a
          disponibilidade de todos já estiver inserida no sistema, conclua o seu
          horário ao clicar em “Criar horário.” De seguida, modifique o horário
          como quiser. Cuidado com as datas que ninguém tenha assinalado como
          disponíveis! Para finalizar, partilhe o seu horário com o resto do seu
          co-op usando o link partilhável ou faça download de uma cópia com o
          botão “Fazer download do horário.”
        </p>

        <h4>Então assinalo quando não estou disponível?</h4>

        <p>Sim, assinale quando não está disponível.</p>

        <h4>
          Um dos participantes do meu co-op é um/a enfermeiro/a e tem que
          trabalhar de segunda a sexta. Como o/a poderemos incluir no horário do
          CCCC?
        </h4>

        <p>
          Talvez o maior problema do encerramento das escolas enquanto resposta
          à epidemia seja o facto de que alguns profissionais de saúde têm que
          ficar em casa a cuidar dos filhos apesar de ser importante que estes
          compareçam nos seus trabalhos. A ideia do CCCC é partilhar a carga do
          cuidado infantil justamente consoante a disponibilidade de cada um/a,
          mas uma pessoa não tem que estar no horário para fazer parte do co-op.
          Se um/a participante do co-op não tiver disponibilidade, não tem de
          inserir nada no calendário. Pense nisso como um horário de apoio e
          certifique que essa pessoa receba uma cópia. O princípio operacional
          do CCCC é “de cada um conforme a sua disponibilidade, para cada um
          consoante as suas necessidades.”
        </p>

        <h4>
          O que é que acontece se houver um dia em que ninguém esteja
          disponível?
        </h4>

        <p>
          Terão de resolver isso entre si, mas o programa irá alertar quando
          ocorrerem tais casos.
        </p>

        <h4>Porque é que há um limite de sete famílias?</h4>

        <p>
          Segundo as orientações que recebemos sobre ajuntamentos, caso hajam
          oito famílias (e conseguirem organizar-se) no co-op, será melhor
          dividí-las em dois grupos de quatro. Idealmente os grupos serão de
          menor número possível, mas reconhecemos que tal possa ser
          constrangedor.
        </p>

        <h4>
          O que é que faz com os nossos dados? Qual é a política de privacidade?
        </h4>

        <p>
          O CCCC não armazena nenhum dos seus dados, portanto não tem que se
          preocupar com a ideia de nós os utilizarmos indevidamente ou vendê-los
          a sites educacionais ou coisas do gênero. O único sítio onde ficam os
          seus dados é no URL partilhável que manda para o seu co-op (Sim, está
          dentro do URL). Dessa forma consegue partilhar as suas informações
          facilmente, mas ninguém tem acesso a estas, nem mesmo nós.
        </p>

        <h4>
          Porque é que não consigo ligar ao Google Calendar? Não posso fazer
          isso com o Google?
        </h4>

        <p>
          Sim! Se quiser, pode ligar o calendário ou ao Google ou a qualquer
          outra plataforma que preferir usar. O CCCC é uma ferramenta simples
          desenhada para ajudar as famílias a pensar nos cuidados infantis
          cooperativos e a facilitar a entrada neste sistema. Não é uma app
          dedicada ao consumidor nem uma empresa de comunicações. Se quiser
          procurar ferramentas com mais opções para organizar o seu co-op, são
          fáceis de encontrar. Isso também será uma vitória para nós.
        </p>

        <h4>
          Podemos modificar o nosso horário se quisermos? É possível mudar ou
          substituir dias?
        </h4>

        <p>
          Sim! O CCCC não é um oráculo, apenas tenta gerar quatro semanas
          distribuídas justamente entre as famílias. Deve sentir-se
          perfeitamente à vontade para alterar o horário do seu grupo da forma
          que achar melhor. Quando o horário estiver feito, pode mudar as cores
          da mesma forma que fez no primeiro passo antes de o partilhar. A
          seguir pode fazer download ou partilhá-lo normalmente.
        </p>

        <h4>Isto é legal?</h4>

        <p>
          Se estiver preocupado com as licenças ou requisitos do seu estado,
          aconselhamos que dê uma olhada{" "}
          <a href="https://www.co-oplaw.org/co-op-basics/types/childcare-cooperatives/">
            nesta página
          </a>{" "}
          do Sustainable Economies Law Center, que explica toda a situação e
          oferece algumas orientações. A conclusão deles é que não temos que nos
          preocupar com este tipo de programa, tratando de algo não-comercial.
        </p>

        <h4>
          Participar num co-op não aumenta as chances de me expor ao vírus mais
          do que se ficasse em casa com as crianças?
        </h4>

        <p>
          Isso é difícil, porque de certa forma a resposta é obviamente sim: a
          quanto menos interações sociais tiver exposto, maiores são as suas
          chances de evitar o vírus. Mas sabemos que nem todos os profissionais
          dos cuidados infantis estão disponíveis para trabalhar todos os dias,
          e que o encerramento das escolas apresenta dificuldades severas para
          algumas famílias. Se o sistema co-op funcionar com grupos pequenos,
          respeita as diretrizes de forma a evitar ajuntamentos. Além disso,
          trata os cuidados infantis como uma responsabilidade coletiva, da qual
          nós, enquanto sociedade, não nos podemos dar ao luxo de ignorar quando
          as coisas se tornam difíceis. Aceitar um pouco mais de
          risco/dificuldade para garantir que os custos não caiam em cima de
          algumas famílias é o se chama viver juntos. E, a médio prazo, para
          achatar a curva de infecção, é essencial garantir que o nosso sistema
          de saúde (e outros sistemas essenciais como os bombeiros e o sistema
          de recolha do lixo) esteja a funcionar no seu potencial máximo e, para
          isso, precisamos de opções coletivas de cuidados infantis.
        </p>

        <p>
          Nada disto substitui os conselhos médicos mais recentes. Por favor,{" "}
          <u>não cuide dos filhos dos outros se estiver doente</u>!
        </p>

        <h4>
          Onde posso aprender mais sobre cooperativas e cuidados infantis?
        </h4>

        <p>
          O livro Bringing Families Together: A Guide to Parent Cooperatives de
          E. Kim Coontz (preparado para a University of California Center for
          Cooperatives) é o recurso mais compreensivo, e está disponível como
          pdf grátis (em inglês) em quatro partes:{" "}
          <a href="http://cccd.coop/bringing-families-together-part-i">
            Part 1
          </a>;{" "}
          <a href="http://cccd.coop/bringing-families-together-part-ii">
            Part 2
          </a>;{" "}
          <a href="http://cccd.coop/bringing-families-together-part-iii">
            Part 3
          </a>;{" "}
          <a href="http://cccd.coop/bringing-families-together-part-iv">
            Part 4
          </a>.
        </p>
      </>
    )}
    {lang.code === "de" && (
      <>
        <h4>Was ist das Covid Kinder Co-op Kreativ?</h4>

        <p>
          Das CCCC ist ein Hilfsprogramm, dass Elterngruppen und Lehrkräften
          ermöglicht gegenseitig auf ihre Kinder aufzupassen. Da die Schulen und
          Kindertagesstätten auf eine unbegrenzte Zeit geschlossen und das
          Hilfspersonal sowie Lehrkräfte ausgeschöpft sind, bieten das Kinder
          Coops die Möglichkeit sich gegenseitig zu unterstützen und eine
          kollektive Kinderfürsorge zu gründen.
        </p>

        <h4>Was ist Covid Kinder Co Op?</h4>

        <p>
          Das Kinderbetreuungs Co-op basiert darauf, dass freiwillige Helfer
          sich die Aufgabe teilen auf ihre Kinder gegenseitig aufzupassen. Das
          Prinzip ist einfach. Anstatt dass ein Erwachsener fünf Tage die Woche
          auf ein Kind aufpasst, passt ein Erwachsener in derselben Zeitspanne
          auf fünf Kinder auf. Zum Beispiel können sich drei Familien darauf
          einigen, dass sie auf ein Kind aufpassen, dessen Eltern arbeiten
          müssen. Co-ops können viel Komplexer werden (und die Anzahl einer
          ganzen Schule erreichen), aber wir entscheiden uns für eine einfache
          und kleine Version.
        </p>

        <h4>Wie benutze ich das CCCC?</h4>

        <p>
          <strong>Erstens</strong>, finden Sie die Betreuung mit der sie
          arbeiten möchten. Dies ist kein Soziales Netzwerk.{" "}
          <strong>Zweitens</strong>, tragen Sie bitte im Kalender ein an welchen
          Tagen die sie nicht verfügbar sind. (Teilen sie den Kalender indem Sie
          auf die Teilen Taste klicken). <strong>Drittens</strong>, nachdem
          jeder die Verfügbarkeit eingetragen hat, klicken sie auf “ Kalender
          erstellen”. <strong>Viertens</strong>, änderen sie den persönlichen
          Kalender je nach Verfügbarkeit. Achten sie vor allem auf Tage indem
          niemand Verfügbar ist. <strong>Fünftens</strong>, teilen Sie ihren
          Kalender mit dem Rest des Coops, indem Sie auf die“Teilen” Taste
          klicken oder laden sie eine Kopie des Kalenders herunter.
        </p>

        <h4>Also markiere ich wenn ich nicht verfügbar bin?</h4>

        <p>Ja, markieren sie auch ihre nichtverfügbarkeit.</p>

        <h4>
          Einer der Coop Mitglieder ist Arzt oder Krankenschwester und müssen
          von M-F arbeiten. Wie können wir sie in dem CCCC integrieren? ”
        </h4>

        <p>
          Einer der größten Herausforderungen in einem epidemischen Notfall ist,
          wenn Schulen schließen und das Gesundheitspersonal zu Hause bleiben
          muss um ihre Kinder zu betreuen. Das CCCC ermöglicht es Haushalten
          anhand ihrer Arbeitszeiten die Verantwortung der Kinderbetreuung zu
          teilen ohne Sie dabei unter Druck zu setzen Teil der Coop zu werden.
          Wenn eine Coop Mitglied keine Zeit hat, muss er/sie den Kalender nicht
          ausfüllen. Dieser Kalender funktioniert wie ein Gast Kalender und
          jeder sollte eine Kopie bekommen. Das Prinzip von der CCCC ist “ zu
          geben wer geben kann, und zu nehmen wer braucht”.
        </p>

        <h4>Was passiert wenn keiner Verfügbar ist an einem Tag?</h4>

        <p>
          Wenn das der Fall ist, müssen sie dies untereinander klären. Der
          Kalender wird ihnen rechtzeitig anzeigen welche Tage betroffen sind.
        </p>

        <h4>Warum können nur sieben Familien teilnehmen?</h4>

        <p>
          Diese Zahl basiert auf die sozialen Richtlinien die wir bekommen
          haben. Die Gruppen sollten möglichst klein gehalten werden. Wenn man
          zum Beispiel eine Familie von acht ist (und sie dies organisieren
          können) empfehlen wir ihnen sich in zwei Gruppen zu teilen und jeweils
          eine Familie von vier zu gründen.
        </p>

        <h4>Was machen Sie mit den Daten? Wie ist die Datenschutzerklärung?</h4>

        <p>
          Das CCCC sammelt keine Daten. Sie müssen sich keine Sorgen machen dass
          wir ihre Daten weitergeben für kommerzielle Zwecke. Ihre Daten werden
          nur auf der CCCC URL mit ihrer Coop geteilt. So können sie ihre
          Informationen sicher teilen ohne das wir jeglichen Zugang auf ihre
          Daten haben.
        </p>

        <h4>
          Why can’t I link my Google calendar? Can’t I do this with Google?
        </h4>

        <p>
          Ja! Und wenn sie möchten können sie das gerne mit ihrem Google
          Kalender oder einer anderen Plattform machen. Das CCCC ist eine
          vereinfachte Form, dessen Design es ermöglicht einen einfachen Start
          in die Kollektive Kinderbetreuung zu bekommen. Es ist keine neue APP
          oder eine digitale Kommunikations Platform. Wenn Sie lieber mit einem
          anderen Programm arbeiten, befürworten wir das.
        </p>

        <h4>
          Können wir unseren Plan ändern wenn wir möchten? Tage tauschen oder
          ersetzen?
        </h4>

        <p>
          Ja klar! Das CCCC ist kein festgelegter Kalender. Es ermöglicht einem
          nur einen guten Plan zu erstellen für die kommenden vier Wochen. Sie
          können ihre Verfügbarkeit so oft wie möglich ändern. Wenn ihr Kalender
          einmal geplant ist, können sie zwischen Farben wählen, wie beim ersten
          Schritt bevor sie es teilen. Danach können sie es herunterladen und
          teilen.
        </p>

        <h4>Ist das alles Legal?</h4>

        <p>
          Wenn Sie besorgt sind mit den staatliche Lizenzanforderungen,{" "}
          <a href="https://www.co-oplaw.org/co-op-basics/types/childcare-cooperatives/">
            besuchen sie auf dieser Seite
          </a>{" "}
          von der nachhaltigen wirtschaftlichen Gesetz Centrum um mehr
          Informationen über die Situation zu erfahren. Wenn sie es nicht zu
          kommerziellen Zwecken verwenden, ist die Coop legal.
        </p>

        <h4>
          Würde eine Coop nicht meine Chancen erhöhen mich anzustecken, anstatt
          einfach zu Hause zu bleiben mit meinen Kindern?
        </h4>

        <p>
          Diese Frage ist schwer zu beantworten. Natürlich ist die erste
          Reaktion ja: Desto weniger Kontakt man mit seinen Mitmenschen hat,
          desto geringer ist die Chance sich anzustecken. Aber wir wissen auch
          dass nicht jeder zu Hause bleiben kann um auf die Kinder aufzupassen.
          Mit der Schliessung der Schulen wird es schwieriger für Familien ihren
          Alltag zu meistern. Kleine Kooperationen wie das Coop ermöglichen es
          die Regeln einzuhalten und Grosse Gruppen Mengen zu vermeiden. Vor
          Allem in diesen Zeiten sind wir auf gegenseitige Hilfe angewiesen.
          Natürlich ist es mit einem kleinen Risiko verbunden, aber es
          verhindert das manche Familien alleine darstehen. In dieser Zeit
          müssen wir sicherstellen dass unser Gesundheitssystem (und andere
          Systeme wie die Müllabfuhr und Feuerwehr) weiter effizient arbeiten
          können um die Infektionsrate niedrig zu halten. Um dies zu ermögliche
          brauchen wir eine Kollektive Kinderbetreuung.
        </p>

        <p>
          Bitte halten sie sich an die aktuellsten Anweisungen des
          Gesundheitssystems und passen Sie nicht auf andere Kinder auf wenn sie
          selber krank sind.
        </p>

        <h4>Wo kann ich mehr über das Kinderbetreuungs Kollektiv lernen?</h4>

        <p>
          Das Buch Bringing Families Together: A Guide to Parent Cooperatives
          von E.Kim Coontz (geschrieben für die Universität von Kalifornien für
          Kooperative) ist eine informative Quelle um mehr zu erfahren. Sie
          können es als PDF auf Englisch hier herunterladen:{" "}
          <a href="http://cccd.coop/bringing-families-together-part-i">
            Part 1
          </a>;{" "}
          <a href="http://cccd.coop/bringing-families-together-part-ii">
            Part 2
          </a>;{" "}
          <a href="http://cccd.coop/bringing-families-together-part-iii">
            Part 3
          </a>;{" "}
          <a href="http://cccd.coop/bringing-families-together-part-iv">
            Part 4
          </a>.
        </p>
      </>
    )}
    {lang.code === "el" && (
      <>
        <h4>
          Τι είναι ο Συνεταιρισμός των Γονιών την Εποχή του Κοροναϊού
          (CCCC/Covid Childcare Co-op Creator);
        </h4>

        <p>
          Ο συνεταιρισμός αυτός είναι ένα από εργαλείο που βοηθάει ομάδες γονιών
          και άλλων ανθρώπων που φροντίζουν παιδιά να δημιουργήσουν αυτόματα ένα
          πρόγραμμα για τη κοινή φροντίδα των παιδιών τους που να βολεύει όλους
          βασισμένο στη διαθεσιμότητα του καθενός. Καθώς κλείνουν τα σχολεία επ’
          αόριστον και δεν προσφέρουν βοήθεια στους γονείς, οι συνεταιρισμοί
          ισορροπούν το βάρος (λεφτά και χρόνο) με την ανάγκη να περιοριστεί η
          επαφή με τους άλλους ανθρώπους.
        </p>

        <h4>Τι είναι ένας συνεταιρισμός για την κοινή φροντίδα των παιδιών;</h4>

        <p>
          Ένας τέτοιος συνεταιρισμός έχει ως βάση μία ομάδα γονέων μοιράζονται
          μεταξύ τους την ευθύνη για την φροντίδα των παιδιών τους. Αντί για,
          παραδείγματος χάριν, πέντε γονείς να φροντίζουν ένα παιδί ο καθένας
          τους κάθε μέρα, ένας γονιός φροντίζει πέντε παιδιά μία μέρα την
          εβδομάδα. Ή τρεις οικογένειες επιλέγουν να βοηθήσουν μία τέταρτη
          οικογένεια επειδή και οι δύο γονείς της τέταρτης οικογένειας πρέπει να
          δουλεύουν κάθε μέρα. Οι συνεταιρισμοί μπορούν να είναι πιο σύνθετοι
          (για παράδειγμα υπάρχουν ολόκληρα σχολεία που είναι συνεταιρισμοί),
          αλλά εδώ σχεδιάσαμε έναν απλό συνεταιρισμό (για προφανείς λόγους).
        </p>

        <h4>Πώς χρησιμοποιώ το εργαλείο αυτό;</h4>

        <p>
          Πρώτα, βρείτε τους άλλους ανθρώπους με τους οποίους θα συνεργαστείτε.
          Δεν είναι ένα οποιοδήποτε κοινωνικό δίκτυο. Μετά, συμπληρώστε το
          ημερολόγιο με τις ημέρες που δεν είστε διαθέσιμος. (Μοιραστείτε ένα
          πρόγραμμα σε διαδικασία με το κουμπί “Σύνδεση ημερολογίου”.) Τρίτον,
          όταν όλοι σας έχετε συμπληρώσει την διαθεσιμότητά σας, δημιουργήστε το
          πρόγραμμά σας πατώντας το κουμπί “Δημιουργία προγράμματος”.) Τέταρτον,
          αλλάξτε το πρόγραμμά σας όπως θέλετε. Φροντίστε να μην υπάρχει καμία
          μέρα όταν δεν είναι διαθέσιμος κανείς! Πέμπτον, μοιραστείτε το
          πρόγραμμα με τους υπόλοιπους στην ομάδα σας χρησιμοποιώντας το κουμπί
          “Κατεβάστε το πρόγραμμα”.
        </p>

        <h4>Άρα, σημειώνω τις ημέρες όταν δεν είμαι διαθέσιμος/η;</h4>
        <p>Ναι, σημειώνετε τις ημέρες όταν δεν είστε διαθέσιμος/η.</p>

        <h4>
          Ένα μέλος του συνεταιρισμού μου είναι νοσοκόμα και δουλεύει Δευτέρα με
          Παρασκευή. Πώς μπορούμε να την περιλάβουμε στο πρόγραμμα;
        </h4>

        <p>
          Το μεγαλύτερο, ίσως, πρόβλημα με το κλείσιμο σχολείων σαν αντίδραση
          μίας επιδημίας είναι ότι αναγκάζουν κάποιους ανθρώπους που δουλεύουν
          στον ιατρικό τομέα να μένουν στο σπίτι με τα παιδιά τους όταν υπάρχει
          μεγάλη ανάγκη να πηγαίνουν στις δουλειές τους. Ο σκοπός του εργαλείου
          αυτού είναι να μοιράζεται η ευθύνη της φροντίδας των παιδιών με έναν
          δίκαιο τρόπο βασισμένα στη διαθεσιμότητα του καθενός, αλλά δεν είναι
          απαραίτητο να συμμετάσχετε στο πρόγραμμα για να είστε μέλος μίας
          ομάδας. Εάν κάποιος δεν έχει καθόλου διαθεσιμότητα, απλά δεν σημειώνει
          τίποτα στο ημερολόγιο. Σε μία τέτοια περίπτωση, είναι απλά ένα
          πρόγραμμα που δείχνει ποιος θα φιλοξενήσει τα παιδιά κάθε μέρα, αλλά
          να φροντίσετε να ενημερώνονται για το πρόγραμμα. Η πρώτη αρχή του
          εργαλείου αυτού είναι “από τον καθένα ανάλογα με τις δυνατότητές του,
          και για τον καθένα ανάλογα με τις ανάγκες του.”
        </p>

        <h4>Τι γίνεται εάν κάποια μέρα δεν είναι διαθέσιμος κανείς;</h4>

        <p>
          Αυτό το πρόβλημα θα πρέπει να το λύσετε μεταξύ σας, αλλά το εργαλείο
          θα σας ενημερώσει εάν γίνεται αυτό.
        </p>

        <h4>Γιατί υπάρχει ανώτερο όριο των εφτά οικογενειών;</h4>

        <p>
          Με βάση τις οδηγίες που λαμβάνουμε σχετικά με την συγκέντρωση
          ανθρώπων, εάν έχετε οχτώ οικογένειες, είναι καλύτερα να σπάσετε σε δύο
          ομάδες των τεσσάρων. Η αλήθεια είναι ότι είναι καλύτερα να είναι όσο
          πιο μικρές γίνεται οι ομάδες.
        </p>

        <h4>Τι κάνετε με τα δεδομένα μας; Τι όρους ιδιωτικότητας έχετε;</h4>
        <p>
          Δεν κρατάμε καθόλου τα δεδομένα σας, οπότε μην ανησυχείτε ότι αυτό
          είναι κάποιου είδους πείραμα ή ότι τα πουλάμε τα δεδομένα σας. Το μόνο
          μέρος όπου μένουν τα δεδομένα σας είναι στην ιστοσελίδα μας και στην
          σελίδα που μοιράζεστε μεταξύ σας. Έτσι μπορείτε εύκολα να μοιράζεστε
          τα δεδομένα σας, αλλά δεν τα έχει κανένας άλλος, ούτε ακόμα εμείς.
        </p>

        <h4>
          Γιατί δεν μπορώ να συνδέσω το ημερολόγιο Google; Δεν μπορώ να κάνω το
          ίδιο με την Google;
        </h4>
        <p>
          Μπορείτε! Και εάν θέλετε, να το κάνετε με την Google ή με οποιαδήποτε
          άλλη υπηρεσία θέλετε. Η ιστοσελίδα αυτή είναι ένα απλό εργαλείο ειδικά
          σχεδιασμένο να κάνει τους γονείς να σκέφτονται την κοινή φροντίδα των
          παιδιών χωρίς άλλα εμπόδια. Δεν είναι καμιά φοβερή εφαρμογή ούτε
          εταιρία ψηφιακής επικοινωνίας. Εάν θέλετε ένα πιο σύνθετο εργαλείο με
          άλλες δυνατότητες για να μοιράζεστε την φροντίδα των παιδιών σας με
          άλλους, δεν μας πειράζει, πάλι κερδισμένοι βγαίνουμε.
        </p>

        <h4>
          Μπορούμε να αλλάξουμε το πρόγραμμά μας εάν θέλουμε; Να
          αντικαταστήσουμε μια μέρα για μίαν άλλη;
        </h4>
        <p>
          Οπωσδήποτε! Το εργαλείο μας δεν είναι μαντείον, απλά επιχειρεί να
          δημιουργεί ένα δίκαια μοιρασμένο πρόγραμμα. Βεβαίως να αλλάξετε το
          αποτέλεσμα που σας βγάζει όπως θέλετε. Όταν βγει το πρόγραμμα,
          μπορείτε να αλλάξετε τα χρώματα όταν το κάνατε στο πρώτο βήμα πριν το
          μοιραστείτε. Μετά το κατεβάζετε και μοιράζεστε κανονικά.
        </p>

        <h4>Είναι νόμιμο;</h4>
        <p>
          Εάν σας απασχολούν οι άδειες που χρειάζονται, σας συμβουλεύουμε να
          ψάξετε αυτή τη σελίδα από το Sustainable Economies Law Center που
          περιγράφει την κατάσταση και προσφέρει οδηγίες. Με λίγα λόγια, λένε να
          μην ανησυχείτε εάν δεν σκοπεύετε να το κάνετε επιχείρηση.
        </p>

        <h4>
          Ένας τέτοιου είδους συνεταιρισμός δεν με κάνει πιο τρωτό στον ιό μίας
          και θα έχω επαφή με πιο πολλούς ανθρώπους σε σύγκριση με το να μείνω
          στο σπίτι με τα δικά μου παιδιά και μόνο;
        </h4>
        <p>
          Είναι δύσκολη ερώτηση αυτή, γιατί σε ένα βαθμό, η απάντηση είναι σαφώς
          “ναι”. Όσο λιγότερες είναι οι συναντήσεις σας με άλλους ανθρώπους,
          τόσο πιο πιθανό είναι να αποφύγετε τον ιό. Αλλά αυτό που ξέρουμε εμείς
          είναι ότι καμιά φορά απλά δεν υπάρχει κανείς να φροντίσει τα παιδιά,
          και το κλείσιμο σχολείων παρουσιάζει ένα σοβαρό πρόβλημα για τις
          οικογένειες. Μικροί συνεταιρισμοί ακολουθούν τις διαταγές από την
          κυβέρνηση να μην γίνουν μεγάλες συγκεντρώσεις ανθρώπων ενώ ταυτόχρονα
          βλέπουν ότι η φροντίδα των παιδιών είναι μία κοινή ευθύνη μίας
          κοινωνίας και δεν μπορούμε να την ξεφορτωθούμε τον καιρό που
          δυσκολεύονται τα πράγματα. Το να δεχτεί κανείς λίγο παραπάνω ρίσκο για
          να φροντίσει να μην πέφτει όλο το βάρος σε μερικές μόνο οικογένειες
          είναι η σημασία του να είστε καλός γείτονας.
        </p>

        <p>
          Αυτό δεν αντικαθιστά τις συμβουλές από τις ιατρικές αρχές και
          παρακαλείστε να μην φροντίσει τα παιδιά άλλων εάν είστε άρρωστος.
        </p>

        <h4>
          Πού μπορώ να βρω περισσότερες πληροφορίες για συνεταιρισμούς για την
          κοινή φροντίδα των παιδιών;
        </h4>

        <p>
          Το βιβλίο Bringing Families Together: A Guide to Parent Cooperatives
          by E. Kim Coontz (prepared for the University of California Center for
          Cooperatives) είναι η πιο εκτενής πηγή πληροφοριών, και διατίθεται ως
          δωρεάν pdf σε τέσσερα μέρη:{" "}
          <a href="http://cccd.coop/bringing-families-together-part-i">
            Part 1
          </a>;{" "}
          <a href="http://cccd.coop/bringing-families-together-part-ii">
            Part 2
          </a>;{" "}
          <a href="http://cccd.coop/bringing-families-together-part-iii">
            Part 3
          </a>;{" "}
          <a href="http://cccd.coop/bringing-families-together-part-iv">
            Part 4
          </a>{" "}
          (στα αγγλικά).
        </p>
      </>
    )}
    {lang.code === "hi" && (
      <>
        <h4>कोविद चाइल्डकैअर सहकार निर्माता क्या</h4>

        <p>
          CCCC एक सरल उपकरण है जो माता-पिता और अन्य देखभाल करने वालों के समूहों
          को प्रत्येक वयस्क की उपलब्धता को देखते हुए स्वचालित रूप से वितरित
          सहकारी चाइल्डकैअर अनुसूची उत्पन्न करने की अनुमति देता है। स्कूलों को
          अनिश्चित काल के लिए बंद करने और देखभाल करने वालों के लिए कुछ या कोई
          संसाधनों का विस्तार करने के साथ, चाइल्डकैअर सह-ऑप्स संतुलन संसाधनों की
          कमी (धन और समय) को हमारे समारोहों को सीमित करने की आवश्यकता के साथ।
        </p>

        <h4>चाइल्डकैअर सहकारिता क्या है?</h4>

        <p>
          जब देखभाल करने वाले बच्चे या बच्चों को देखने का बोझ साझा करने के लिए
          सहमत होते हैं। सप्ताह के प्रत्येक दिन एक बच्चे को देखने वाले पांच
          माता-पिता के बजाय, उनमें से प्रत्येक सप्ताह के एक दिन में पांच बच्चों
          को देखता है। या तीन परिवार महीने के लिए एक बच्चे को देखने के लिए
          व्यापार करने के लिए सहमत होते हैं क्योंकि बच्चे की प्राथमिक देखभाल
          करने वाले को समय नहीं मिलेगा। सह-ऑप्स उस से अधिक जटिल तरीके से प्राप्त
          कर सकते हैं (पूर्ण विद्यालयों सहित), लेकिन हम सरल, सबसे छोटे संस्करणों
          (स्पष्ट कारणों के लिए) के लिए डिजाइन कर रहे हैं।
        </p>

        <h4>मैं CCCC का उपयोग कैसे करूँ?</h4>

        <p>
          पहले, उन अन्य देखभालकर्ताओं को खोजें जिनके साथ आप काम करने जा रहे हैं।
          यह सोशल नेटवर्क नहीं है। दूसरा, उन दिनों के साथ कैलेंडर भरें जब
          प्रत्येक प्रदाता उपलब्ध न हो। ("साझा लिंक" बटन के साथ प्रक्रिया में एक
          अनुसूची साझा करें)। तीसरा, सभी की उपलब्धता दर्ज करने के बाद, "शेड्यूल
          बनाएं" बटन दबाकर अपना शेड्यूल बनाएं। चौथा, अपने कार्यक्रम को संशोधित
          करें हालांकि आप फिट दिखते हैं। किसी भी अंतराल के दिनों के लिए बाहर
          देखो जब कोई भी नहीं कहा है कि वे उपलब्ध हैं! पांचवां, शेड्यूल लिंक का
          उपयोग करके या "डाउनलोड शेड्यूल" बटन के साथ एक प्रति डाउनलोड करके, बाकी
          को-ऑप के साथ अपना शेड्यूल साझा करें।
        </p>

        <h4>जब मैं उपलब्ध नहीं हूं तो मैं चिह्नित करता हूं</h4>

        <p>हां, जब आप उपलब्ध नहीं हैं तब चिह्नित करें</p>

        <h4>
          मेरे सह-सदस्यों में से एक नर्स है और उन्हें सोमवार से शुक्रवार तक काम
          करना है, हम उन्हें CCCC अनुसूची में कैसे शामिल कर सकते हैं?
        </h4>

        <p>
          महामारी की प्रतिक्रिया के रूप में स्कूल बंद होने की शायद सबसे बड़ी
          समस्या यह है कि वे कुछ महत्वपूर्ण स्वास्थ्य देखभाल कार्यकर्ताओं को घर
          पर ही छोड़ देते हैं जो बच्चों की देखरेख करते हैं जब उन्हें अपनी
          नौकरियों की सख्त जरूरत होती है। CCCC का उद्देश्य लोगों की उपलब्धता के
          अनुसार होस्टिंग के बोझ को उचित रूप से साझा करना है, लेकिन आपको सह-ऑप
          का हिस्सा बनने के लिए शेड्यूल पर रहने की आवश्यकता नहीं है। यदि
          सह-सदस्य की कोई उपलब्धता नहीं है, तो उन्हें कैलेंडर भरने की आवश्यकता
          नहीं है। इसे एक होस्टिंग शेड्यूल के रूप में सोचें और सुनिश्चित करें कि
          उन्हें एक प्रति प्राप्त हो। CCCC का संचालन सिद्धांत "उनकी उपलब्धता के
          अनुसार प्रत्येक से, उनकी आवश्यकताओं के अनुसार प्रत्येक से है।"
        </p>

        <h4>यदि कोई दिन उपलब्ध हो तो क्या होगा</h4>

        <p>
          आपको उस एक को अपने बीच में हल करना होगा, लेकिन शेड्यूलर आपको उन दिनों
          के बारे में सूचित करेगा।
        </p>

        <h4>यह सात परिवारों तक सीमित क्यों है?</h4>

        <p>
          यदि आपके पास आठ परिवार हैं (और इसे प्रबंधित कर सकते हैं), तो आप चार
          समूहों के दो समूहों में बंटने से बेहतर हैं, मार्गदर्शन के आधार पर, हम
          सभी सामूहिक समारोहों के बारे में प्राप्त करेंगे। वास्तव में आपको
          समूहों को यथासंभव छोटा रखना चाहिए, लेकिन हम पहचानते हैं कि वहाँ क्या
          संभव है की एक सीमा है।
        </p>

        <h4>आप हमारे डेटा के साथ क्या करते हैं? गोपनीयता नीति क्या है</h4>

        <p>
          CCCC आपके किसी भी डेटा को संग्रहीत नहीं करता है, इसलिए आपको हमें इस
          बारे में चिंता करने की ज़रूरत नहीं है कि आप पर कोई प्रयोग चला रहे हैं
          या अपनी जानकारी शैक्षिक वेबसाइटों या इस तरह की किसी चीज़ को बेच रहे
          हैं। आपके CCCC के डेटा का एकमात्र स्थान आपके द्वारा सह-ऑप के भीतर भेजे
          जाने वाले शैलबल url है। (हां, यह url में है!) इस तरह आप अपनी जानकारी
          आसानी से साझा कर सकते हैं, लेकिन किसी और के पास नहीं है, हमारे पास भी
          नहीं है।
        </p>

        <h4>
          मैं अपना Google कैलेंडर लिंक क्यों नहीं कर सकता / सकती? क्या मैं
          Google के साथ ऐसा नहीं कर सकता?
        </h4>

        <p>
          हाँ! और यदि आप चाहते हैं, तो आपको पूरी तरह से, या जो भी अन्य ऑनलाइन
          सेवा आप उपयोग करना चाहते हैं। CCCC एक सरल, समर्पित उपकरण है जो देखभाल
          करने वालों को सामूहिक चाइल्डकैअर के बारे में सोचने और प्रवेश में आने
          वाली बाधाओं को कम करने के लिए डिज़ाइन किया गया है। यह एक नया हत्यारा
          ऐप या डिजिटल संचार कंपनी नहीं है। यदि आप अपने सह सेशन की योजना बनाने
          के लिए अधिक सुविधाओं के साथ उपकरण ढूंढना चाहते हैं, तो उन्हें ट्रैक
          करना आसान होगा। हम इसे एक जीत के रूप में गिनेंगे।
        </p>

        <h4>
          यदि हम चाहें तो क्या हम अपना कार्यक्रम संशोधित कर सकते हैं? स्विच या
          स्थानापन्न दिन
        </h4>

        <p>
          हाँ! CCCC एक अलंकरण नहीं है, यह सिर्फ एक काफी वितरित चार सप्ताह
          उत्पन्न करने की कोशिश करता है। आपको अपने समूह के साथ परिणाम बदलने के
          लिए स्वतंत्र से अधिक महसूस करना चाहिए, हालांकि आप जैसे हैं। एक बार
          शेड्यूल जनरेट होने के बाद, आप रंगों को उसी तरह से स्विच कर सकते हैं
          जैसा आपने शेयर करने से पहले किया था। फिर आप इसे सामान्य की तरह डाउनलोड
          या साझा कर सकते हैं।
        </p>

        <h4>क्या यह कानूनी है? </h4>

        <p>
          यदि आप राज्य लाइसेंसिंग आवश्यकताओं से संबंधित हैं, तो हम आपको इस पृष्ठ
          को स<a href="https://www.co-oplaw.org/co-op-basics/types/childcare-cooperatives/">
            स्टेनेबल इकोनॉमीज़ लॉ सेंटर
          </a>{" "}
          से बाहर की जाँच करने के लिए प्रोत्साहित करते हैं जो स्थिति से बाहर
          रहता है और कुछ मार्गदर्शन प्रदान करता है। यदि आप कुछ व्यावसायिक योजना
          नहीं बना रहे हैं, तो उनका संक्षिप्त उत्तर इसके बारे में बहुत अधिक
          चिंता करने के लिए नहीं है।
        </p>

        <h4>
          सह-ऑप में शामिल होने से मेरे बच्चों के साथ घर में रहने के सापेक्ष मेरा
          प्रदर्शन बढ़ जाएगा
        </h4>

        <p>
          यह कठिन है, क्योंकि कुछ स्तर पर उत्तर स्पष्ट रूप से हां है: आप जितनी
          कम बातचीत कर सकते हैं, वायरस से बचने की आपकी संभावना उतनी ही बेहतर
          होगी। लेकिन हम जानते हैं कि हर दिन देखरेख करने के लिए हर देखभाल करने
          वाला उपलब्ध नहीं है, और यह स्कूल बंद कुछ परिवारों के लिए एक कठिन
          कठिनाई पेश करता है। छोटे सह-ऑप्स अभी भी चाइल्डकेयर को सामूहिक
          जिम्मेदारी के रूप में मानते हुए समारोहों से बचने के लिए निर्देशों का
          अनुपालन करते हैं, जो कि एक समाज के रूप में हम चीजों को कठिन होने के
          बाद जल्द ही हार नहीं मान सकते। यह सुनिश्चित करने के लिए कि कुछ
          परिवारों पर एक साथ जीवन बसर करना है, लागतों को कम करने के लिए थोड़ा
          अधिक जोखिम / कठिनाई को स्वीकार करना। और मध्यम अवधि में, यह सुनिश्चित
          करना कि हमारी स्वास्थ्य प्रणाली (और कचरा और आग जैसी अन्य आवश्यक
          प्रणालियाँ) पूरी क्षमता पर हैं, संक्रमण वक्र से निपटने का एक
          महत्वपूर्ण हिस्सा है, और यह करने के लिए हमें सामूहिक चाइल्डकैअर
          विकल्पों की आवश्यकता है।
        </p>

        <p>
          इनमें से कोई भी नवीनतम चिकित्सा सलाह का विकल्प नहीं है, और यदि आप
          बीमार हैं तो कृपया अन्य लोगों के बच्चों की देखभाल न करें
        </p>

        <h4>
          मैं चाइल्डकैअर सहकारी समितियों के बारे में और अधिक कहां जान सकता हूं?
        </h4>

        <p>
          साथ लाने वाली पुस्तक: अ गाइड टू पेरेंट कोऑपरेटिव्स टू ई। किम कॉनटोज़
          (यूनिवर्सिटी ऑफ़ कैलिफ़ोर्निया सेंटर फ़ॉर कोऑपरेटिव्स द्वारा तैयार
          किया गया) सबसे व्यापक संसाधन है, और यह चार भागों में मुफ्त पीडीऍफ़ के
          रूप में उपलब्ध है<a href="http://cccd.coop/bringing-families-together-part-i">
            भाग 1
          </a>;{" "}
          <a href="http://cccd.coop/bringing-families-together-part-ii">
            भाग 2
          </a>;{" "}
          <a href="http://cccd.coop/bringing-families-together-part-iii">
            भाग 3
          </a>;{" "}
          <a href="http://cccd.coop/bringing-families-together-part-iv">
            भाग 4
          </a>।
        </p>
      </>
    )}
  </>
);

export default FAQ;
