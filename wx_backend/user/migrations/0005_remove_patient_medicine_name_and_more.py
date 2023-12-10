# Generated by Django 4.2.5 on 2023-12-06 11:10

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("user", "0004_guardian_rename_guardian_openid_patient_patient_id_and_more"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="patient",
            name="Medicine_name",
        ),
        migrations.RemoveField(
            model_name="patient",
            name="Medicine_status",
        ),
        migrations.RemoveField(
            model_name="patient",
            name="Medicine_time",
        ),
        migrations.RemoveField(
            model_name="patient",
            name="Medicine_usage",
        ),
        migrations.AddField(
            model_name="patient",
            name="Medicine_reminder",
            field=models.JSONField(null=True),
        ),
    ]
