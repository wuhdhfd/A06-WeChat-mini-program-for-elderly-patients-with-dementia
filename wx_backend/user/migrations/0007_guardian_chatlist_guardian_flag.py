# Generated by Django 4.2.5 on 2023-12-17 05:20

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("user", "0006_doctor_rename_medicine_reminder_patient_healthdata_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="guardian",
            name="Chatlist",
            field=models.JSONField(null=True),
        ),
        migrations.AddField(
            model_name="guardian",
            name="Flag",
            field=models.BooleanField(default=False),
        ),
    ]
