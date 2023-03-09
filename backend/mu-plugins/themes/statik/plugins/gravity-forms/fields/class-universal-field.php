<?php

declare(strict_types=1);

namespace Statik\Luna\GravityForms\Fields;

\defined('ABSPATH') || exit('Direct access is not permitted!');

/**
 * Class UniversalField.
 *
 * @since 2.0.0
 */
class UniversalField extends \GF_Field_Text
{
    /** @var string */
    public $type = 'universal';

    /**
     * Returns the field's form editor title.
     *
     * @since 2.0.0
     */
    public function get_form_editor_field_title(): string
    {
        return \__('Universal', 'statik-luna');
    }

    /**
     * Returns the field's form editor description.
     *
     * @since 2.0.0
     */
    public function get_form_editor_field_description(): string
    {
        return \__('Allows to create custom universal field.', 'statik-luna');
    }

    /**
     * Returns the field's form editor icon.
     *
     * @since 2.0.0
     */
    public function get_form_editor_field_icon(): string
    {
        return 'gform-icon--square';
    }

    /**
     * {@inheritDoc}
     *
     * @since 2.0.0
     */
    public function get_form_editor_button(): array
    {
        return [
            'group' => 'advanced_fields',
            'text' => $this->get_form_editor_field_title(),
            'icon' => $this->get_form_editor_field_icon(),
            'description' => $this->get_form_editor_field_description(),
        ];
    }

    /**
     * {@inheritDoc}
     *
     * @since 2.0.0
     */
    function get_form_editor_field_settings(): array
    {
        return array_merge(parent::get_form_editor_field_settings(), ['statik_universal_setting']);
    }
}
