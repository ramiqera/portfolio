# Generated by Django 5.1.1 on 2024-09-13 08:47

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("john", "0002_rename_porfile_profile"),
    ]

    operations = [
        migrations.RenameField(
            model_name="skills",
            old_name="skills_name",
            new_name="skill_name",
        ),
    ]
