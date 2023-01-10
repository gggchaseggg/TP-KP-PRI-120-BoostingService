using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace BoostingService.Migrations
{
    public partial class Migration2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "mmr",
                table: "Users");

            migrationBuilder.CreateTable(
                name: "Services",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    name = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Services", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Orders",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    idUser = table.Column<int>(type: "int", nullable: true),
                    userid = table.Column<int>(type: "int", nullable: true),
                    idService = table.Column<int>(type: "int", nullable: true),
                    serviceid = table.Column<int>(type: "int", nullable: true),
                    dateOfCreate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    cost = table.Column<int>(type: "int", nullable: false),
                    Status = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Orders", x => x.id);
                    table.ForeignKey(
                        name: "FK_Orders_Services_serviceid",
                        column: x => x.serviceid,
                        principalTable: "Services",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Orders_Users_userid",
                        column: x => x.userid,
                        principalTable: "Users",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Orders_serviceid",
                table: "Orders",
                column: "serviceid");

            migrationBuilder.CreateIndex(
                name: "IX_Orders_userid",
                table: "Orders",
                column: "userid");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Orders");

            migrationBuilder.DropTable(
                name: "Services");

            migrationBuilder.AddColumn<int>(
                name: "mmr",
                table: "Users",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
