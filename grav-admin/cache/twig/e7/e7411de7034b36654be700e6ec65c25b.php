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

/* servicios.html.twig */
class __TwigTemplate_e46d59a5e58c3bc1f60777d104f17ef9 extends Template
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
            'meta' => [$this, 'block_meta'],
            'title' => [$this, 'block_title'],
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
    public function block_meta(array $context, array $blocks = []): iterable
    {
        $macros = $this->macros;
        // line 4
        yield "    <meta name=\"description\" content=\"Servicios profesionales de Gustavo Adolfo Tobías Ramírez\">
";
        yield from [];
    }

    // line 7
    /**
     * @return iterable<null|scalar|\Stringable>
     */
    public function block_title(array $context, array $blocks = []): iterable
    {
        $macros = $this->macros;
        yield "Servicios | Gustavo Tobías";
        yield from [];
    }

    // line 9
    /**
     * @return iterable<null|scalar|\Stringable>
     */
    public function block_content(array $context, array $blocks = []): iterable
    {
        $macros = $this->macros;
        // line 10
        yield "<section class=\"page-hero\">
    <div class=\"container\">
        <p class=\"page-hero__badge\">Servicios Profesionales</p>
        <h1 class=\"page-hero__title\">Lo que puedo ofrecerte</h1>
        <p class=\"page-hero__description\">Desarrollo de software, consultoría tecnológica y liderazgo de proyectos.</p>
    </div>
</section>

<section class=\"section\">
    <div class=\"container\">
            <div class=\"card\">
                <div class=\"card__content\">
                    <h3 class=\"card__title\">Desarrollo de Software</h3>
                    <p class=\"card__description\">Creación de aplicaciones web y móviles, desarrollo fullstack, APIs y soluciones a medida.</p>
                </div>
            </div>
        </div>
    </div>

";
        yield from [];
    }

    /**
     * @codeCoverageIgnore
     */
    public function getTemplateName(): string
    {
        return "servicios.html.twig";
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
        return array (  86 => 10,  79 => 9,  68 => 7,  62 => 4,  55 => 3,  44 => 1,);
    }

    public function getSourceContext(): Source
    {
        return new Source("{% extends \x27partials/base.html.twig\x27 %}

{% block meta%}
    <meta name=\"description\" content=\"Servicios profesionales de Gustavo Adolfo Tobías Ramírez\">
{% endblock %}

{% block title %}Servicios | Gustavo Tobías{% endblock %}

{% block content %}
<section class=\"page-hero\">
    <div class=\"container\">
        <p class=\"page-hero__badge\">Servicios Profesionales</p>
        <h1 class=\"page-hero__title\">Lo que puedo ofrecerte</h1>
        <p class=\"page-hero__description\">Desarrollo de software, consultoría tecnológica y liderazgo de proyectos.</p>
    </div>
</section>

<section class=\"section\">
    <div class=\"container\">
            <div class=\"card\">
                <div class=\"card__content\">
                    <h3 class=\"card__title\">Desarrollo de Software</h3>
                    <p class=\"card__description\">Creación de aplicaciones web y móviles, desarrollo fullstack, APIs y soluciones a medida.</p>
                </div>
            </div>
        </div>
    </div>

{% endblock %}", "servicios.html.twig", "C:\\Users\\tobia\\Desktop\\Programas\\Programas VSC\\DesarrolloWeb\\Clase 1\\Tarea 1\\grav-admin\\user\\themes\\portfolio\\templates\\servicios.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = ["extends" => 1];
        static $filters = [];
        static $functions = [];

        try {
            $this->sandbox->checkSecurity(
                ['extends'],
                [],
                [],
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
