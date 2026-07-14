<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\PreventRequestsDuringMaintenance as Middleware;

class PreventRequestsDuringMaintenance extends Middleware
{
    protected function isDownForMaintenance(): bool
    {
        return file_exists(storage_path('framework/maintenance.php'));
    }
}
