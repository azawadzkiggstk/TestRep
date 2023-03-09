<?php

declare(strict_types=1);

namespace Statik\Search\Common\Cli\Command;

use Statik\Search\Common\Cli\CommandManagerInterface;

/**
 * Class AbstractCommand.
 */
abstract class AbstractCommand implements CommandInterface
{
    /**
     * AbstractCommand constructor.
     */
    public function __construct(protected ?CommandManagerInterface $commandManager = null)
    {
    }
}
