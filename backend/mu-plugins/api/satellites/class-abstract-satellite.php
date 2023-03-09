<?php

declare(strict_types=1);

namespace Statik\API\Satellites;

/**
 * Class AbstractSatellite.
 *
 * @since 2.0.0
 */
abstract class AbstractSatellite
{
    /**
     * Create a satellite instance.
     *
     * @since 2.0.0
     */
    public static function instance(): self
    {
        return new static();
    }

    /**
     * Get configuration constants for Satellite.
     *
     * @since 2.0.0
     */
    abstract public function initialize(?array $config): void;

    /**
     * Get field name.
     *
     * @since 2.0.0
     */
    abstract public function getName(): string;

    /**
     * Print constants for Satellite.
     *
     * @since 2.0.0
     */
    public function printConstants(): void
    {
        $options = \get_site_option($this->getName());

        if (false === \is_array($options)) {
            return;
        }

        foreach ($options as $key => $value) {
            false === \defined($key) && \define($key, $value);
        }
    }

    /**
     * Update config in the database.
     *
     * @since 2.0.0
     */
    protected function updateConfig(?array $value): bool
    {
        return $value ? \update_site_option($this->getName(), $value) : \delete_site_option($this->getName());
    }
}
