<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\CoreExtension;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;
use Twig\TemplateWrapper;

/* default.html.twig */
class __TwigTemplate_75e0620564380614423441f4f0490614 extends Template
{
    private Source $source;
    /**
     * @var array<string, Template>
     */
    private array $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->blocks = [
            'content' => [$this, 'block_content'],
        ];
        $this->sandbox = $this->extensions[SandboxExtension::class];
        $this->checkSecurity();
    }

    protected function doGetParent(array $context): bool|string|Template|TemplateWrapper
    {
        // line 1
        return "partials/base.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = []): iterable
    {
        $macros = $this->macros;
        $this->parent = $this->load("partials/base.html.twig", 1);
        yield from $this->parent->unwrap()->yield($context, array_merge($this->blocks, $blocks));
    }

    // line 3
    /**
     * @return iterable<null|scalar|\Stringable>
     */
    public function block_content(array $context, array $blocks = []): iterable
    {
        $macros = $this->macros;
        // line 4
        yield "<section class=\"hero\">
    <div class=\"container hero__grid\">
        <div class=\"hero__content\">
            <p class=\"hero__badge\"><span class=\"hero__badge-dot\"></span> Desarrollador Fullstack · Lider Tecnico · Project Manager</p>
            <h1 class=\"hero__title\">Gustavo Adolfo <span class=\"hero__title--accent\">Tobias Ramirez</span></h1>
            <p class=\"hero__subtitle\">Estudiante de Ingenieria en Sistemas (UMG). Especializado en C++, Java, Python y desarrollo fullstack.</p>
            <div class=\"hero__actions\">
                <a href=\"";
        // line 11
        yield $this->sandbox->ensureToStringAllowed($this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->sandbox->ensureToStringAllowed(($context["base_url"] ?? null), 11, $this->source), "html", null, true), 11, $this->source);
        yield "/proyectos\" class=\"btn btn--primary\">Ver Proyectos</a>
                <a href=\"";
        // line 12
        yield $this->sandbox->ensureToStringAllowed($this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->sandbox->ensureToStringAllowed(($context["base_url"] ?? null), 12, $this->source), "html", null, true), 12, $this->source);
        yield "/noticias\" class=\"btn btn--secondary\">Leer Noticias</a>
            </div>
        </div>
        <div class=\"hero__image\">
            <img src=\"";
        // line 16
        yield $this->sandbox->ensureToStringAllowed($this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->sandbox->ensureToStringAllowed($this->extensions['Grav\Common\Twig\Extension\GravExtension']->urlFunc("theme://images/Gustavo.jpg"), 16, $this->source), "html", null, true), 16, $this->source);
        yield "\" alt=\"Gustavo Adolfo Tobias Ramirez\" class=\"hero__photo\">
        </div>
    </div>
</section>

<section class=\"section\">
    <div class=\"container\">
        <div class=\"section__header\">
            <h2 class=\"section__title\">Acerca de Mi</h2>
            <p class=\"section__subtitle\">Mi trayectoria y enfoque de trabajo</p>
        </div>
        <div class=\"about-grid\">
            <div class=\"about-card\">
                <img src=\"";
        // line 29
        yield $this->sandbox->ensureToStringAllowed($this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->sandbox->ensureToStringAllowed($this->extensions['Grav\Common\Twig\Extension\GravExtension']->urlFunc("theme://images/Gustavo.jpg"), 29, $this->source), "html", null, true), 29, $this->source);
        yield "\" alt=\"Gustavo Tobias\" class=\"about__photo\">
                <h3 class=\"about-card__title\">Perfil</h3>
                <p class=\"about-card__text\">22 años, estudiante de Ingenieria en Sistemas. He liderado 4 proyectos universitarios desde la arquitectura hasta la entrega.</p>
            </div>
            <div class=\"about-card\">
                <h3 class=\"about-card__title\">Rol</h3>
                <p class=\"about-card__text\">Arquitecto + Fullstack Developer + Team Lead. Diseño sistemas, APIs, firmware y coordino equipos agiles.</p>
            </div>
            <div class=\"about-card\">
                <h3 class=\"about-card__title\">Enfoque</h3>
                <p class=\"about-card__text\">Codigo limpio, arquitectura modular, documentacion y testing. Cree el lenguaje UM++ para explorar robotica.</p>
            </div>
        </div>
    </div>
</section>

<section class=\"section highlight\">
    <div class=\"container\">
        <div class=\"section__header\">
            <h2 class=\"section__title\">Proyecto Estrella</h2>
            <p class=\"section__subtitle\">API Python + Compilador Java + UM++</p>
        </div>
        <div class=\"highlight__card\">
            <p>Pipeline completo: lenguaje UM++ → compilador Java → API Python (FastAPI) → comandos al robot Batirrover.</p>
            <div class=\"highlight__links\">
                <a href=\"https://github.com/ZelderD-12/COMPI-PF-CREDENCIALESROBOT.git\" class=\"btn btn--secondary\" target=\"_blank\">Ver Repositorio</a>
                <a href=\"https://github.com/ZelderD-12/PF-LFA.git\" class=\"btn btn--secondary\" target=\"_blank\">Repo Batirrover</a>
            </div>
        </div>
    </div>
</section>

<section id=\"contacto\" class=\"section\">
    <div class=\"container\">
        <div class=\"section__header\">
            <h2 class=\"section__title\">Contacto</h2>
            <p class=\"section__subtitle\">¿Tienes un proyecto en mente? Hablemos.</p>
        </div>
        <ul class=\"contact-list\">
            <li class=\"contact-item\"><a href=\"mailto:tobiasgusito@gmail.com\">tobiasgusito@gmail.com</a></li>
            <li class=\"contact-item\"><a href=\"tel:+50251151685\">+502 5115 1685</a></li>
            <li class=\"contact-item\"><a href=\"https://github.com/OmegaKerveus7\" target=\"_blank\">GitHub: OmegaKerveus7</a></li>
        </ul>
    </div>
</section>
";
        yield from [];
    }

    /**
     * @codeCoverageIgnore
     */
    public function getTemplateName(): string
    {
        return "default.html.twig";
    }

    /**
     * @codeCoverageIgnore
     */
    public function isTraitable(): bool
    {
        return false;
    }

    /**
     * @codeCoverageIgnore
     */
    public function getDebugInfo(): array
    {
        return array (  96 => 29,  80 => 16,  73 => 12,  69 => 11,  60 => 4,  53 => 3,  42 => 1,);
    }

    public function getSourceContext(): Source
    {
        return new Source("{% extends \x27partials/base.html.twig\x27 %}

{% block content %}
<section class=\"hero\">
    <div class=\"container hero__grid\">
        <div class=\"hero__content\">
            <p class=\"hero__badge\"><span class=\"hero__badge-dot\"></span> Desarrollador Fullstack · Lider Tecnico · Project Manager</p>
            <h1 class=\"hero__title\">Gustavo Adolfo <span class=\"hero__title--accent\">Tobias Ramirez</span></h1>
            <p class=\"hero__subtitle\">Estudiante de Ingenieria en Sistemas (UMG). Especializado en C++, Java, Python y desarrollo fullstack.</p>
            <div class=\"hero__actions\">
                <a href=\"{{ base_url }}/proyectos\" class=\"btn btn--primary\">Ver Proyectos</a>
                <a href=\"{{ base_url }}/noticias\" class=\"btn btn--secondary\">Leer Noticias</a>
            </div>
        </div>
        <div class=\"hero__image\">
            <img src=\"{{ url(\x27theme://images/Gustavo.jpg\x27) }}\" alt=\"Gustavo Adolfo Tobias Ramirez\" class=\"hero__photo\">
        </div>
    </div>
</section>

<section class=\"section\">
    <div class=\"container\">
        <div class=\"section__header\">
            <h2 class=\"section__title\">Acerca de Mi</h2>
            <p class=\"section__subtitle\">Mi trayectoria y enfoque de trabajo</p>
        </div>
        <div class=\"about-grid\">
            <div class=\"about-card\">
                <img src=\"{{ url(\x27theme://images/Gustavo.jpg\x27) }}\" alt=\"Gustavo Tobias\" class=\"about__photo\">
                <h3 class=\"about-card__title\">Perfil</h3>
                <p class=\"about-card__text\">22 años, estudiante de Ingenieria en Sistemas. He liderado 4 proyectos universitarios desde la arquitectura hasta la entrega.</p>
            </div>
            <div class=\"about-card\">
                <h3 class=\"about-card__title\">Rol</h3>
                <p class=\"about-card__text\">Arquitecto + Fullstack Developer + Team Lead. Diseño sistemas, APIs, firmware y coordino equipos agiles.</p>
            </div>
            <div class=\"about-card\">
                <h3 class=\"about-card__title\">Enfoque</h3>
                <p class=\"about-card__text\">Codigo limpio, arquitectura modular, documentacion y testing. Cree el lenguaje UM++ para explorar robotica.</p>
            </div>
        </div>
    </div>
</section>

<section class=\"section highlight\">
    <div class=\"container\">
        <div class=\"section__header\">
            <h2 class=\"section__title\">Proyecto Estrella</h2>
            <p class=\"section__subtitle\">API Python + Compilador Java + UM++</p>
        </div>
        <div class=\"highlight__card\">
            <p>Pipeline completo: lenguaje UM++ → compilador Java → API Python (FastAPI) → comandos al robot Batirrover.</p>
            <div class=\"highlight__links\">
                <a href=\"https://github.com/ZelderD-12/COMPI-PF-CREDENCIALESROBOT.git\" class=\"btn btn--secondary\" target=\"_blank\">Ver Repositorio</a>
                <a href=\"https://github.com/ZelderD-12/PF-LFA.git\" class=\"btn btn--secondary\" target=\"_blank\">Repo Batirrover</a>
            </div>
        </div>
    </div>
</section>

<section id=\"contacto\" class=\"section\">
    <div class=\"container\">
        <div class=\"section__header\">
            <h2 class=\"section__title\">Contacto</h2>
            <p class=\"section__subtitle\">¿Tienes un proyecto en mente? Hablemos.</p>
        </div>
        <ul class=\"contact-list\">
            <li class=\"contact-item\"><a href=\"mailto:tobiasgusito@gmail.com\">tobiasgusito@gmail.com</a></li>
            <li class=\"contact-item\"><a href=\"tel:+50251151685\">+502 5115 1685</a></li>
            <li class=\"contact-item\"><a href=\"https://github.com/OmegaKerveus7\" target=\"_blank\">GitHub: OmegaKerveus7</a></li>
        </ul>
    </div>
</section>
{% endblock %}
", "default.html.twig", "C:\\Users\\tobia\\Desktop\\Programas\\Programas VSC\\DesarrolloWeb\\Clase 1\\Tarea 1\\grav-admin\\user\\themes\\portfolio\\templates\\default.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = ["extends" => 1];
        static $filters = ["escape" => 11];
        static $functions = ["url" => 16];

        try {
            $this->sandbox->checkSecurity(
                ['extends'],
                ['escape'],
                ['url'],
                $this->source
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->source);

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }
}
