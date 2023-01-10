using Microsoft.EntityFrameworkCore.Migrations;

namespace BoostingService.Migrations
{
    public partial class NewMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "cost",
                table: "Services",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "boosterid",
                table: "Orders",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "countLP",
                table: "Orders",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "endMMR",
                table: "Orders",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "idBooster",
                table: "Orders",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "startMMR",
                table: "Orders",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Orders_boosterid",
                table: "Orders",
                column: "boosterid");

            migrationBuilder.AddForeignKey(
                name: "FK_Orders_Users_boosterid",
                table: "Orders",
                column: "boosterid",
                principalTable: "Users",
                principalColumn: "id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Orders_Users_boosterid",
                table: "Orders");

            migrationBuilder.DropIndex(
                name: "IX_Orders_boosterid",
                table: "Orders");

            migrationBuilder.DropColumn(
                name: "cost",
                table: "Services");

            migrationBuilder.DropColumn(
                name: "boosterid",
                table: "Orders");

            migrationBuilder.DropColumn(
                name: "countLP",
                table: "Orders");

            migrationBuilder.DropColumn(
                name: "endMMR",
                table: "Orders");

            migrationBuilder.DropColumn(
                name: "idBooster",
                table: "Orders");

            migrationBuilder.DropColumn(
                name: "startMMR",
                table: "Orders");
        }
    }
}
