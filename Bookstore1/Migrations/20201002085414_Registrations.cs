using Microsoft.EntityFrameworkCore.Migrations;

namespace Bookstore1.Migrations
{
    public partial class Registrations : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Registration_Authors_AuthorId",
                table: "Registration");

            migrationBuilder.DropForeignKey(
                name: "FK_Registration_Books_BookId",
                table: "Registration");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Registration",
                table: "Registration");

            migrationBuilder.RenameTable(
                name: "Registration",
                newName: "Registrations");

            migrationBuilder.RenameIndex(
                name: "IX_Registration_AuthorId",
                table: "Registrations",
                newName: "IX_Registrations_AuthorId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Registrations",
                table: "Registrations",
                columns: new[] { "BookId", "AuthorId" });

            migrationBuilder.CreateTable(
                name: "Contacts",
                columns: table => new
                {
                    ContactId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FirstName = table.Column<string>(nullable: true),
                    LastName = table.Column<string>(nullable: true),
                    Mail = table.Column<string>(nullable: true),
                    Country = table.Column<string>(nullable: true),
                    Content = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Contacts", x => x.ContactId);
                });

            migrationBuilder.AddForeignKey(
                name: "FK_Registrations_Authors_AuthorId",
                table: "Registrations",
                column: "AuthorId",
                principalTable: "Authors",
                principalColumn: "AuthorId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Registrations_Books_BookId",
                table: "Registrations",
                column: "BookId",
                principalTable: "Books",
                principalColumn: "BookId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Registrations_Authors_AuthorId",
                table: "Registrations");

            migrationBuilder.DropForeignKey(
                name: "FK_Registrations_Books_BookId",
                table: "Registrations");

            migrationBuilder.DropTable(
                name: "Contacts");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Registrations",
                table: "Registrations");

            migrationBuilder.RenameTable(
                name: "Registrations",
                newName: "Registration");

            migrationBuilder.RenameIndex(
                name: "IX_Registrations_AuthorId",
                table: "Registration",
                newName: "IX_Registration_AuthorId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Registration",
                table: "Registration",
                columns: new[] { "BookId", "AuthorId" });

            migrationBuilder.AddForeignKey(
                name: "FK_Registration_Authors_AuthorId",
                table: "Registration",
                column: "AuthorId",
                principalTable: "Authors",
                principalColumn: "AuthorId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Registration_Books_BookId",
                table: "Registration",
                column: "BookId",
                principalTable: "Books",
                principalColumn: "BookId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
