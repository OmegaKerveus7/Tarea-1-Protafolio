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

/* partials/base.html.twig */
class __TwigTemplate_65af4ad8d7d22c251641848782969da2 extends Template
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

        $this->parent = false;

        $this->blocks = [
            'meta' => [$this, 'block_meta'],
            'title' => [$this, 'block_title'],
            'stylesheets' => [$this, 'block_stylesheets'],
            'content' => [$this, 'block_content'],
            'javascripts' => [$this, 'block_javascripts'],
        ];
        $this->sandbox = $this->extensions[SandboxExtension::class];
        $this->checkSecurity();
    }

    protected function doDisplay(array $context, array $blocks = []): iterable
    {
        $macros = $this->macros;
        // line 1
        yield "<!DOCTYPE html>
<html lang=\"es\">
<head>
    <meta charset=\"UTF-8\">
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
    ";
        // line 6
        yield from $this->unwrap()->yieldBlock('meta', $context, $blocks);
        // line 9
        yield "    <title>";
        yield from $this->unwrap()->yieldBlock('title', $context, $blocks);
        yield "</title>
    ";
        // line 10
        yield from $this->unwrap()->yieldBlock('stylesheets', $context, $blocks);
        // line 15
        yield "</head>
<body>
    <header class=\"header\">
        <nav class=\"nav container\">
            <a href=\"";
        // line 19
        yield $this->sandbox->ensureToStringAllowed($this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(($this->sandbox->ensureToStringAllowed(($context["base_url"] ?? null), 19, $this->source) . "/"), "html", null, true), 19, $this->source);
        yield "\" class=\"nav__logo\">Tarea de Desarrollo Web</a>
            <button class=\"nav__toggle\" id=\"navToggle\">☰</button>
            <ul class=\"nav__menu\" id=\"navMenu\">
                <li><a href=\"";
        // line 22
        yield $this->sandbox->ensureToStringAllowed($this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(($this->sandbox->ensureToStringAllowed(($context["base_url"] ?? null), 22, $this->source) . "/"), "html", null, true), 22, $this->source);
        yield "\" class=\"nav__link ";
        yield (((($this->sandbox->ensureToStringAllowed(CoreExtension::getAttribute($this->env, $this->source, ($context["page"] ?? null), "route", [], "any", false, false, true, 22), 22, $this->source) == "/") || ($this->sandbox->ensureToStringAllowed(CoreExtension::getAttribute($this->env, $this->source, ($context["page"] ?? null), "route", [], "any", false, false, true, 22), 22, $this->source) == "/home"))) ? ("nav__link--active") : (""));
        yield "\">Inicio</a></li>
                <li><a href=\"";
        // line 23
        yield $this->sandbox->ensureToStringAllowed($this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->sandbox->ensureToStringAllowed(($context["base_url"] ?? null), 23, $this->source), "html", null, true), 23, $this->source);
        yield "/proyectos\" class=\"nav__link ";
        yield ((CoreExtension::inFilter("proyectos", CoreExtension::getAttribute($this->env, $this->source, ($context["page"] ?? null), "route", [], "any", false, false, true, 23))) ? ("nav__link--active") : (""));
        yield "\">Proyectos</a></li>
                <li><a href=\"";
        // line 24
        yield $this->sandbox->ensureToStringAllowed($this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->sandbox->ensureToStringAllowed(($context["base_url"] ?? null), 24, $this->source), "html", null, true), 24, $this->source);
        yield "/noticias\" class=\"nav__link ";
        yield ((CoreExtension::inFilter("noticias", CoreExtension::getAttribute($this->env, $this->source, ($context["page"] ?? null), "route", [], "any", false, false, true, 24))) ? ("nav__link--active") : (""));
        yield "\">Noticias</a></li>
                <li><a href=\"";
        // line 25
        yield $this->sandbox->ensureToStringAllowed($this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->sandbox->ensureToStringAllowed(($context["base_url"] ?? null), 25, $this->source), "html", null, true), 25, $this->source);
        yield "/servicios\" class=\"nav__link ";
        yield ((CoreExtension::inFilter("servicios", CoreExtension::getAttribute($this->env, $this->source, ($context["page"] ?? null), "route", [], "any", false, false, true, 25))) ? ("nav__link--active") : (""));
        yield "\">Servicios</a></li>
                <li><a href=\"";
        // line 26
        yield $this->sandbox->ensureToStringAllowed($this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(($this->sandbox->ensureToStringAllowed(($context["base_url"] ?? null), 26, $this->source) . "/#contacto"), "html", null, true), 26, $this->source);
        yield "\" class=\"nav__link\">Contacto</a></li>
            </ul>
        </nav>
    </header>

    <main>
        ";
        // line 32
        yield from $this->unwrap()->yieldBlock('content', $context, $blocks);
        // line 33
        yield "    </main>

    <footer class=\"footer\">
        <div class=\"container footer__grid\">
            <div>
                <a href=\"";
        // line 38
        yield $this->sandbox->ensureToStringAllowed($this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(($this->sandbox->ensureToStringAllowed(($context["base_url"] ?? null), 38, $this->source) . "/"), "html", null, true), 38, $this->source);
        yield "\" class=\"footer__logo\">Tarea de Desarrollo Web</a>
                <p class=\"footer__tagline\">Desarrollador Fullstack · Programador Junior · PM</p>
                <p class=\"footer__copyright\"> <span id=\"year\"></span> Gustavo Adolfo Tobias Ramirez.</p>
            </div>
            <div>
                <h4 class=\"footer__nav-title\">Navegacion</h4>
                <ul class=\"footer__nav-list\">
                    <li><a href=\"";
        // line 45
        yield $this->sandbox->ensureToStringAllowed($this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(($this->sandbox->ensureToStringAllowed(($context["base_url"] ?? null), 45, $this->source) . "/"), "html", null, true), 45, $this->source);
        yield "\" class=\"footer__nav-link\">Inicio</a></li>
                    <li><a href=\"";
        // line 46
        yield $this->sandbox->ensureToStringAllowed($this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->sandbox->ensureToStringAllowed(($context["base_url"] ?? null), 46, $this->source), "html", null, true), 46, $this->source);
        yield "/proyectos\" class=\"footer__nav-link\">Proyectos</a></li>
                    <li><a href=\"";
        // line 47
        yield $this->sandbox->ensureToStringAllowed($this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->sandbox->ensureToStringAllowed(($context["base_url"] ?? null), 47, $this->source), "html", null, true), 47, $this->source);
        yield "/noticias\" class=\"footer__nav-link\">Noticias</a></li>
                    <li><a href=\"";
        // line 48
        yield $this->sandbox->ensureToStringAllowed($this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(($this->sandbox->ensureToStringAllowed(($context["base_url"] ?? null), 48, $this->source) . "/#contacto"), "html", null, true), 48, $this->source);
        yield "\" class=\"footer__nav-link\">Contacto</a></li>
                </ul>
            </div>
            <div>
                <h4 class=\"footer__nav-title\">Conectar</h4>
                <ul class=\"footer__social-list\">
                    <li><a href=\"mailto:tobiasgusito@gmail.com\" class=\"footer__social-link\">Email</a></li>
                    <li><a href=\"https://github.com/OmegaKerveus7\" class=\"footer__social-link\" target=\"_blank\">GitHub</a></li>
                    <li><a href=\"https://github.com/ZelderD-12\" class=\"footer__social-link\" target=\"_blank\">GitHub</a></li>
                </ul>
            </div>
        </div>
    </footer>

    ";
        // line 62
        yield from $this->unwrap()->yieldBlock('javascripts', $context, $blocks);
        // line 67
        yield "</body>
</html>
";
        yield from [];
    }

    // line 6
    /**
     * @return iterable<null|scalar|\Stringable>
     */
    public function block_meta(array $context, array $blocks = []): iterable
    {
        $macros = $this->macros;
        // line 7
        yield "    <meta name=\"description\" content=\"";
        if ((($tmp = CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, ($context["page"] ?? null), "header", [], "any", false, false, true, 7), "metadata", [], "any", false, false, true, 7), "description", [], "any", false, false, true, 7)) && $tmp instanceof Markup ? (string) $tmp : $tmp)) {
            yield $this->sandbox->ensureToStringAllowed($this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->sandbox->ensureToStringAllowed(CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, ($context["page"] ?? null), "header", [], "any", false, false, true, 7), "metadata", [], "any", false, false, true, 7), "description", [], "any", false, false, true, 7), 7, $this->source), "html", null, true), 7, $this->source);
        } else {
            yield "Portafolio profesional de Gustavo Adolfo Tobías Ramírez";
        }
        yield "\">
    ";
        yield from [];
    }

    // line 9
    /**
     * @return iterable<null|scalar|\Stringable>
     */
    public function block_title(array $context, array $blocks = []): iterable
    {
        $macros = $this->macros;
        yield $this->sandbox->ensureToStringAllowed($this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->sandbox->ensureToStringAllowed(CoreExtension::getAttribute($this->env, $this->source, ($context["page"] ?? null), "title", [], "any", false, false, true, 9), 9, $this->source), "html", null, true), 9, $this->source);
        if (($this->sandbox->ensureToStringAllowed(CoreExtension::getAttribute($this->env, $this->source, ($context["page"] ?? null), "title", [], "any", false, false, true, 9), 9, $this->source) != "Gustavo Tobías | Portafolio")) {
            yield " | Gustavo Tobías";
        }
        yield from [];
    }

    // line 10
    /**
     * @return iterable<null|scalar|\Stringable>
     */
    public function block_stylesheets(array $context, array $blocks = []): iterable
    {
        $macros = $this->macros;
        // line 11
        yield "    <link rel=\"stylesheet\" href=\"";
        yield $this->sandbox->ensureToStringAllowed($this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->sandbox->ensureToStringAllowed($this->extensions['Grav\Common\Twig\Extension\GravExtension']->urlFunc("theme://css/index.css"), 11, $this->source), "html", null, true), 11, $this->source);
        yield "\">
    <link rel=\"stylesheet\" href=\"";
        // line 12
        yield $this->sandbox->ensureToStringAllowed($this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->sandbox->ensureToStringAllowed($this->extensions['Grav\Common\Twig\Extension\GravExtension']->urlFunc("theme://css/proyectos.css"), 12, $this->source), "html", null, true), 12, $this->source);
        yield "\">
    <link rel=\"stylesheet\" href=\"";
        // line 13
        yield $this->sandbox->ensureToStringAllowed($this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->sandbox->ensureToStringAllowed($this->extensions['Grav\Common\Twig\Extension\GravExtension']->urlFunc("theme://css/noticias.css"), 13, $this->source), "html", null, true), 13, $this->source);
        yield "\">
    ";
        yield from [];
    }

    // line 32
    /**
     * @return iterable<null|scalar|\Stringable>
     */
    public function block_content(array $context, array $blocks = []): iterable
    {
        $macros = $this->macros;
        yield from [];
    }

    // line 62
    /**
     * @return iterable<null|scalar|\Stringable>
     */
    public function block_javascripts(array $context, array $blocks = []): iterable
    {
        $macros = $this->macros;
        // line 63
        yield "    <script src=\"";
        yield $this->sandbox->ensureToStringAllowed($this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->sandbox->ensureToStringAllowed($this->extensions['Grav\Common\Twig\Extension\GravExtension']->urlFunc("theme://js/index.js"), 63, $this->source), "html", null, true), 63, $this->source);
        yield "\"></script>
    <script src=\"";
        // line 64
        yield $this->sandbox->ensureToStringAllowed($this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->sandbox->ensureToStringAllowed($this->extensions['Grav\Common\Twig\Extension\GravExtension']->urlFunc("theme://js/proyectos.js"), 64, $this->source), "html", null, true), 64, $this->source);
        yield "\"></script>
    <script src=\"";
        // line 65
        yield $this->sandbox->ensureToStringAllowed($this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->sandbox->ensureToStringAllowed($this->extensions['Grav\Common\Twig\Extension\GravExtension']->urlFunc("theme://js/noticias.js"), 65, $this->source), "html", null, true), 65, $this->source);
        yield "\"></script>
    ";
        yield from [];
    }

    /**
     * @codeCoverageIgnore
     */
    public function getTemplateName(): string
    {
        return "partials/base.html.twig";
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
        return array (  249 => 65,  245 => 64,  240 => 63,  233 => 62,  223 => 32,  216 => 13,  212 => 12,  207 => 11,  200 => 10,  186 => 9,  174 => 7,  167 => 6,  160 => 67,  158 => 62,  141 => 48,  137 => 47,  133 => 46,  129 => 45,  119 => 38,  112 => 33,  110 => 32,  101 => 26,  95 => 25,  89 => 24,  83 => 23,  77 => 22,  71 => 19,  65 => 15,  63 => 10,  58 => 9,  56 => 6,  49 => 1,);
    }

    public function getSourceContext(): Source
    {
        return new Source("<!DOCTYPE html>
<html lang=\"es\">
<head>
    <meta charset=\"UTF-8\">
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
    {% block meta %}
    <meta name=\"description\" content=\"{% if page.header.metadata.description %}{{ page.header.metadata.description }}{% else %}Portafolio profesional de Gustavo Adolfo Tobías Ramírez{% endif %}\">
    {% endblock %}
    <title>{% block title %}{{ page.title }}{% if page.title != \x27Gustavo Tobías | Portafolio\x27 %} | Gustavo Tobías{% endif %}{% endblock %}</title>
    {% block stylesheets %}
    <link rel=\"stylesheet\" href=\"{{ url(\x27theme://css/index.css\x27) }}\">
    <link rel=\"stylesheet\" href=\"{{ url(\x27theme://css/proyectos.css\x27) }}\">
    <link rel=\"stylesheet\" href=\"{{ url(\x27theme://css/noticias.css\x27) }}\">
    {% endblock %}
</head>
<body>
    <header class=\"header\">
        <nav class=\"nav container\">
            <a href=\"{{ base_url ~ \x27/\x27 }}\" class=\"nav__logo\">Tarea de Desarrollo Web</a>
            <button class=\"nav__toggle\" id=\"navToggle\">☰</button>
            <ul class=\"nav__menu\" id=\"navMenu\">
                <li><a href=\"{{ base_url ~ \x27/\x27 }}\" class=\"nav__link {{ page.route == \x27/\x27 or page.route == \x27/home\x27 ? \x27nav__link--active\x27 : \x27\x27 }}\">Inicio</a></li>
                <li><a href=\"{{ base_url }}/proyectos\" class=\"nav__link {{ \x27proyectos\x27 in page.route ? \x27nav__link--active\x27 : \x27\x27 }}\">Proyectos</a></li>
                <li><a href=\"{{ base_url }}/noticias\" class=\"nav__link {{ \x27noticias\x27 in page.route ? \x27nav__link--active\x27 : \x27\x27 }}\">Noticias</a></li>
                <li><a href=\"{{ base_url }}/servicios\" class=\"nav__link {{ \x27servicios\x27 in page.route ? \x27nav__link--active\x27 : \x27\x27 }}\">Servicios</a></li>
                <li><a href=\"{{ base_url ~ \x27/#contacto\x27 }}\" class=\"nav__link\">Contacto</a></li>
            </ul>
        </nav>
    </header>

    <main>
        {% block content %}{% endblock %}
    </main>

    <footer class=\"footer\">
        <div class=\"container footer__grid\">
            <div>
                <a href=\"{{ base_url ~ \x27/\x27 }}\" class=\"footer__logo\">Tarea de Desarrollo Web</a>
                <p class=\"footer__tagline\">Desarrollador Fullstack · Programador Junior · PM</p>
                <p class=\"footer__copyright\"> <span id=\"year\"></span> Gustavo Adolfo Tobias Ramirez.</p>
            </div>
            <div>
                <h4 class=\"footer__nav-title\">Navegacion</h4>
                <ul class=\"footer__nav-list\">
                    <li><a href=\"{{ base_url ~ \x27/\x27 }}\" class=\"footer__nav-link\">Inicio</a></li>
                    <li><a href=\"{{ base_url }}/proyectos\" class=\"footer__nav-link\">Proyectos</a></li>
                    <li><a href=\"{{ base_url }}/noticias\" class=\"footer__nav-link\">Noticias</a></li>
                    <li><a href=\"{{ base_url ~ \x27/#contacto\x27 }}\" class=\"footer__nav-link\">Contacto</a></li>
                </ul>
            </div>
            <div>
                <h4 class=\"footer__nav-title\">Conectar</h4>
                <ul class=\"footer__social-list\">
                    <li><a href=\"mailto:tobiasgusito@gmail.com\" class=\"footer__social-link\">Email</a></li>
                    <li><a href=\"https://github.com/OmegaKerveus7\" class=\"footer__social-link\" target=\"_blank\">GitHub</a></li>
                    <li><a href=\"https://github.com/ZelderD-12\" class=\"footer__social-link\" target=\"_blank\">GitHub</a></li>
                </ul>
            </div>
        </div>
    </footer>

    {% block javascripts %}
    <script src=\"{{ url(\x27theme://js/index.js\x27) }}\"></script>
    <script src=\"{{ url(\x27theme://js/proyectos.js\x27) }}\"></script>
    <script src=\"{{ url(\x27theme://js/noticias.js\x27) }}\"></script>
    {% endblock %}
</body>
</html>
", "partials/base.html.twig", "C:\\Users\\tobia\\Desktop\\Programas\\Programas VSC\\DesarrolloWeb\\Clase 1\\Tarea 1\\grav-admin\\user\\themes\\portfolio\\templates\\partials\\base.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = ["block" => 6, "if" => 7];
        static $filters = ["escape" => 19];
        static $functions = ["url" => 11];

        try {
            $this->sandbox->checkSecurity(
                ['block', 'if'],
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
