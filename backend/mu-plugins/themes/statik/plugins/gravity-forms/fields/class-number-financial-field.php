<?php

declare(strict_types=1);

namespace Statik\Luna\GravityForms\Fields;

use GFCommon;

\defined('ABSPATH') || exit('Direct access is not permitted!');

/**
 * Class NumberFinancialField.
 *
 * @since 2.0.0
 */
class NumberFinancialField extends \GF_Field_Text
{
    /** @var string */
    public $type = 'number_financial';

    /**
     * Returns the field's form editor title.
     *
     * @since 2.0.0
     */
    public function get_form_editor_field_title(): string
    {
        return \__('Financial number', 'statik-luna');
    }

    /**
     * Returns the field's form editor description.
     *
     * @since 2.0.0
     */
    public function get_form_editor_field_description(): string
    {
        return \__('Allows users to enter a financial number.', 'statik-luna');
    }

    /**
     * Returns the field's form editor icon.
     *
     * @since 2.0.0
     */
    public function get_form_editor_field_icon(): string
    {
        return 'gform-icon--monetization-on';
    }

    /**
     * {@inheritDoc}
     *
     * @since 2.0.0
     */
    public function sanitize_settings(): void
    {
        $this->rangeMin = GFCommon::to_number($this->rangeMin);
        $this->rangeMax = GFCommon::to_number($this->rangeMax);

        parent::sanitize_settings();
    }

    /**
     * {@inheritDoc}
     *
     * @since 2.0.0
     */
    function get_form_editor_field_settings(): array
    {
        return array_merge(
            parent::get_form_editor_field_settings(),
            [
                'default_value_setting',
                'custom_number_format_setting',
                'range_setting',
                'statik_numberMask_setting',
                'statik_currency_setting',
            ]
        );
    }
}
