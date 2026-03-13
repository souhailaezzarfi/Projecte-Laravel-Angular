<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('centre_sessio', function (Blueprint $table) {
            $table->foreignId('centre_id')->constrained('centres')->onDelete('cascade');
            $table->foreignId('sessio_id')->constrained('sessios')->onDelete('cascade');
            $table->primary(['centre_id', 'sessio_id']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('centre_sessio');
    }
};
