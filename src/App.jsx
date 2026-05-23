import { useEffect } from 'react'
import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  BellRing,
  Boxes,
  Brain,
  CheckCircle2,
  CircuitBoard,
  CloudCog,
  Factory,
  Gauge,
  Leaf,
  LineChart,
  MapPinned,
  Radar,
  Scale,
  ShieldCheck,
  SlidersHorizontal,
  Thermometer,
  Warehouse,
} from 'lucide-react'
import { solutions } from './data/solutions'
import './App.css'

const operationBlocks = [
  ['Menos incerteza', 'Pontos críticos deixam de depender de percepção isolada e passam a ser acompanhados com evidências.'],
  ['Mais visibilidade', 'Granjas, propriedades, ativos e processos ganham uma camada contínua de informação operacional.'],
  ['Resposta mais rápida', 'Alertas e histórico ajudam equipes a agir antes que desvios virem perda.'],
  ['Histórico confiável', 'Dados organizados fortalecem qualidade, auditoria, comparação e aprendizado.'],
  ['Operação mais segura', 'Ambiência, temperatura, consumo e equipamentos recebem acompanhamento proporcional ao risco que carregam.'],
  ['Gestão orientada por dados', 'Decisões deixam de ser reativas e passam a ser sustentadas por padrões reais.'],
]

const capabilities = [
  ['Monitoramento em campo', 'Equipamentos e sensores acompanhando variáveis críticas em propriedades, aviários e granjas.', Radar],
  ['Automação de processos', 'Rotinas mais padronizadas, menos dependentes de intervenção manual e mais consistentes.', SlidersHorizontal],
  ['Alertas críticos', 'Sinais operacionais para acelerar resposta quando ambiência, produção, qualidade ou segurança entram em risco.', BellRing],
  ['Proteção operacional', 'Camadas de segurança e resposta para ativos, ambiência e processos sensíveis da produção animal.', ShieldCheck],
  ['Rastreabilidade operacional', 'Histórico confiável para auditoria, qualidade, gestão e tomada de decisão.', MapPinned],
  ['Integração de dados', 'Informações de campo organizadas para conectar operação, gestão e melhoria contínua.', CloudCog],
  ['Soluções sob medida', 'Projetos alinhados ao problema real da operação, não apenas a um catálogo fechado.', CircuitBoard],
]

const intelligenceLayers = [
  ['Monitorar', 'Acompanhar variáveis essenciais em tempo real.', Gauge],
  ['Alertar', 'Identificar desvios antes que comprometam produção, qualidade ou segurança.', BellRing],
  ['Proteger', 'Apoiar resposta operacional quando ambiência, conservação ou equipamentos entram em risco.', ShieldCheck],
  ['Prever', 'Usar dados e histórico para antecipar riscos.', LineChart],
  ['Automatizar', 'Padronizar processos e reduzir falhas manuais.', SlidersHorizontal],
  ['Evoluir', 'Transformar dados em melhoria contínua.', Brain],
]

const areas = [
  ['Pecuária leiteira', 'Qualidade do leite, coleta, propriedades e cadeias que exigem evidência.', Thermometer],
  ['Avicultura', 'Ambiência, segurança, padronização e leitura contínua de operações intensivas.', Leaf],
  ['Suinocultura', 'Monitoramento produtivo, consumo, estruturas e risco operacional.', Boxes],
  ['Ambiência e segurança operacional', 'Temperatura, ventilação, conforto, equipamentos e resposta em produção animal.', Warehouse],
  ['Pesagem e produção', 'Pontos de controle para volume, fluxo, consumo e desempenho.', Scale],
  ['Cadeias alimentares rastreáveis', 'Histórico operacional para qualidade, boas práticas e gestão em escala.', CheckCircle2],
]

const valueItems = [
  ['Perdas invisíveis', 'Riscos silenciosos ganham visibilidade antes que comprometam resultado.'],
  ['Ativos produtivos', 'Aviários, granjas, tanques, equipamentos e estruturas críticas recebem monitoramento proporcional ao impacto que podem causar.'],
  ['Padronização', 'Operações em escala passam a comparar processos com a mesma referência de qualidade.'],
  ['Controle operacional', 'Equipes trabalham com alertas, histórico e contexto para decidir melhor.'],
  ['Rastreabilidade', 'Cada etapa relevante pode gerar evidência para gestão, auditoria e melhoria.'],
  ['Escala', 'A camada tecnológica cresce junto com unidades, lotes, granjas, propriedades, rotas e plantas produtivas.'],
]

const methodSteps = [
  ['Diagnóstico da operação', 'Entendimento dos pontos críticos, riscos, ativos e indicadores que realmente importam.'],
  ['Projeto da solução', 'Desenho da camada tecnológica mais adequada para o ambiente produtivo, a espécie, o processo e o nível de controle desejado.'],
  ['Implantação dos equipamentos', 'Instalação dos pontos de monitoramento e proteção nas etapas que sustentam produção, qualidade e segurança.'],
  ['Conexão dos dados', 'Organização das informações em uma base operacional clara, acessível e preparada para gestão.'],
  ['Alertas e gestão', 'Configuração de sinais, histórico e rotinas para apoiar resposta rápida e decisão com evidência.'],
  ['Evolução contínua', 'Ajustes e novas camadas conforme a operação amadurece, cresce e encontra novos pontos de valor.'],
]

const whyItems = [
  ['Visão de cadeia produtiva', 'A GenesiTech observa a operação como um sistema vivo, com campo, ativos, pessoas e gestão conectados.'],
  ['Tecnologia aplicada ao campo real', 'As soluções são pensadas para produção animal, pressão operacional e rotina de escala.'],
  ['Soluções próprias e sob medida', 'Cada projeto nasce do problema concreto da cadeia, com espaço para evoluir com o cliente.'],
  ['Hardware, dados e gestão', 'Equipamentos, plataforma e histórico trabalham como uma única camada de inteligência.'],
  ['Proteção e previsibilidade', 'O foco não é medir por medir. É proteger produção, qualidade, boas práticas e resultado.'],
  ['Evolução com o cliente', 'A infraestrutura pode receber novas frentes conforme a operação ganha maturidade de dados.'],
]

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible')
        })
      },
      { threshold: 0.15 },
    )

    document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el))

    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0
      document.documentElement.style.setProperty('--scroll-progress', progress.toString())
    }

    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', updateProgress)
    }
  }, [])
}

function App() {
  useScrollReveal()

  return (
    <main>
      <div className="progress" aria-hidden="true" />

      <section className="hero" id="top">
        <img
          className="hero__image"
          src="/assets/poultry-operation.jpg"
          alt="Aviário moderno em operação de produção animal"
          loading="eager"
        />
        <div className="hero__shade" />
        <nav className="nav" aria-label="Navegação principal">
          <a className="brand" href="#top" aria-label="GenesiTech">
            <span className="brand__mark">G</span>
            <span>
              <strong>GENESITECH</strong>
              <small>Operational intelligence</small>
            </span>
          </a>
          <div className="nav__links">
            <a href="#fazemos">O que fazemos</a>
            <a href="#solucoes">Soluções</a>
            <a href="#metodo">Método</a>
          </div>
        </nav>

        <div className="hero__content" data-reveal>
          <span className="eyebrow">Tecnologia aplicada à produção de alimentos</span>
          <h1>Tecnologia para cadeias produtivas que não podem depender de incerteza.</h1>
          <p>
            A GenesiTech desenvolve soluções de monitoramento, automação e inteligência operacional para proteger
            cadeias de proteína animal, reduzir perdas invisíveis e transformar dados da operação em decisão.
          </p>
          <div className="hero__actions" aria-label="Ações principais">
            <a className="button button--primary" href="#solucoes">
              Conhecer soluções <ArrowRight size={18} />
            </a>
            <a className="button button--ghost" href="#contato">
              Falar com a GenesiTech <ArrowDown size={18} />
            </a>
          </div>
        </div>

        <div className="hero__signal" aria-label="Pilares GenesiTech" data-reveal>
          <div>
            <Radar size={20} />
            <span>Monitorar</span>
          </div>
          <div>
            <ShieldCheck size={20} />
            <span>Proteger</span>
          </div>
          <div>
            <Brain size={20} />
            <span>Evoluir</span>
          </div>
        </div>
      </section>

      <section className="section standard" data-reveal>
        <div className="section__intro">
          <span className="eyebrow">O novo padrão da operação agroindustrial</span>
          <h2>Operações críticas precisam enxergar o que antes ficava disperso.</h2>
          <p>
            Grandes cadeias produtivas de alimentos lidam com variáveis críticas todos os dias: temperatura, ambiência,
            peso, consumo, equipamentos, logística, qualidade, conservação e segurança. Quando essas informações ficam
            invisíveis ou chegam tarde, a operação perde capacidade de resposta. A GenesiTech cria tecnologia para tornar
            esses pontos mensuráveis, conectados e acionáveis.
          </p>
        </div>
        <div className="precision-grid">
          {operationBlocks.map(([title, text], index) => (
            <article className="precision-card" key={title} style={{ '--delay': `${index * 55}ms` }} data-reveal>
              <BadgeCheck size={22} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section capabilities" id="fazemos">
        <div className="section__intro section__intro--center" data-reveal>
          <span className="eyebrow">O que fazemos</span>
          <h2>Criamos infraestrutura tecnológica para operações produtivas críticas.</h2>
          <p>
            A GenesiTech não entrega apenas equipamento. Ela estrutura camadas de controle, proteção e inteligência para
            que a operação consiga medir, agir e evoluir.
          </p>
        </div>
        <div className="capability-grid">
          {capabilities.map(([title, text, Icon]) => (
            <article className="capability-card" key={title} data-reveal>
              <Icon size={24} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="intelligence" data-reveal>
        <div className="intelligence__media">
          <img src="/assets/milk-processing-factory.jpg" alt="Operação agroindustrial limpa em processamento de alimentos" loading="lazy" />
        </div>
        <div className="intelligence__content">
          <span className="eyebrow">Camadas de inteligência para operações críticas</span>
          <h2>Monitorar, alertar, proteger, prever, automatizar e evoluir.</h2>
          <p>
            Em operações intensivas, pequenas falhas podem gerar grandes perdas. A GenesiTech desenvolve sistemas que
            monitoram variáveis críticas, identificam desvios, apoiam respostas rápidas e criam histórico para evolução
            contínua.
          </p>
          <div className="layer-flow">
            {intelligenceLayers.map(([title, text, Icon], index) => (
              <article key={title} style={{ '--delay': `${index * 60}ms` }} data-reveal>
                <Icon size={20} />
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section areas">
        <div className="section__intro" data-reveal>
          <span className="eyebrow">Onde atuamos</span>
          <h2>Um mapa de aplicações para cadeias que precisam de escala, controle e continuidade.</h2>
        </div>
        <div className="area-map" data-reveal>
          {areas.map(([title, text, Icon]) => (
            <article key={title}>
              <Icon size={24} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section solutions-section" id="solucoes">
        <div className="section__intro section__intro--center" data-reveal>
          <span className="eyebrow">Soluções e produtos</span>
          <h2>Produtos atuais e novas frentes de inteligência operacional.</h2>
          <p>
            O portfólio da GenesiTech nasce de problemas reais das cadeias produtivas de alimentos. Cada solução combina
            campo, dados, ambiência, rastreabilidade, proteção operacional e gestão em uma camada preparada para crescer.
          </p>
        </div>
        <div className="solutions-grid">
          {solutions.map((solution) => (
            <article className={solution.featured ? 'solution-card solution-card--featured' : 'solution-card'} key={solution.name} data-reveal>
              <div className="solution-card__image">
                <img src={solution.image} alt={`${solution.name} - ${solution.category}`} loading="lazy" />
                <span>{solution.status}</span>
              </div>
              <div className="solution-card__content">
                <p className="solution-card__category">{solution.category}</p>
                <h3>{solution.name}</h3>
                <p>{solution.description}</p>
                <a href={solution.link} className="text-link">
                  {solution.cta} <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section value">
        <div className="section__intro" data-reveal>
          <span className="eyebrow">Valor para grandes operações</span>
          <h2>Controle operacional para quem precisa proteger produção, qualidade e resultado.</h2>
          <p>
            Grandes operações de proteína animal não precisam apenas de dados. Precisam de evidência confiável,
            padronização, rastreabilidade e resposta operacional. A GenesiTech transforma pontos críticos em informação
            útil para reduzir perdas invisíveis, proteger ativos produtivos e dar escala a decisões baseadas em evidência.
          </p>
        </div>
        <div className="value-grid">
          {valueItems.map(([title, text]) => (
            <article className="value-card" key={title} data-reveal>
              <CheckCircle2 size={22} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section method" id="metodo">
        <div className="section__intro section__intro--center" data-reveal>
          <span className="eyebrow">Método GenesiTech</span>
          <h2>Uma camada tecnológica alinhada ao problema real da operação.</h2>
          <p>
            A GenesiTech não entrega apenas equipamento. Ela entende o risco, estrutura a solução, conecta os dados e
            evolui a operação com o cliente.
          </p>
        </div>
        <div className="timeline">
          {methodSteps.map(([title, text], index) => (
            <article className="timeline__item" key={title} data-reveal>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="why" data-reveal>
        <div className="why__content">
          <span className="eyebrow">Por que a GenesiTech</span>
          <h2>Porque operações agroindustriais precisam de tecnologia que entenda campo, escala e risco.</h2>
        </div>
        <div className="why__grid">
          {whyItems.map(([title, text]) => (
            <article key={title} data-reveal>
              <Factory size={22} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="final-cta" id="contato" data-reveal>
        <span className="eyebrow">GENESITECH</span>
        <h2>Transforme pontos críticos da sua operação em dados, alertas e decisões.</h2>
        <p>
          Fale com a GenesiTech para estruturar uma camada de monitoramento, proteção e inteligência operacional para
          sua cadeia produtiva.
        </p>
        <a className="button button--primary" href="mailto:contato@genesitech.com.br?subject=Contato%20GenesiTech">
          Falar com especialista <ArrowRight size={18} />
        </a>
      </section>
    </main>
  )
}

export default App

