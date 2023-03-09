<?php

declare(strict_types=1);

namespace Statik\Blocks\CustomBlocks\Statik\GoogleMap;

use Statik\Blocks\BlockType\AbstractBlockType;
use Statik\Blocks\BlockType\SettingsInterface;

/**
 * Class GoogleMap.
 */
class GoogleMap extends AbstractBlockType implements SettingsInterface
{
    /**
     * {@inheritDoc}
     */
    public function getSettingsFields(): array
    {
        return [
            'apiToken' => [
                'type' => 'input',
                'label' => \__('Google API token', 'statik-blocks'),
                'attrs' => ['class' => 'regular-text', 'type' => 'password', 'autocomplete' => 'off'],
            ],
        ];
    }
}
