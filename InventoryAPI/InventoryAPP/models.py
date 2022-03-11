from django.db import models

# Create your models here.


class Items(models.Model):
    ItemID = models.AutoField(primary_key=True)
    StockId = models.IntegerField()
    ItemType = models.CharField(max_length=500)
    ItemName = models.CharField(max_length=500)
    BrandName = models.CharField(max_length=500)
    Quantity = models.IntegerField()


class Stocks(models.Model):
    StockID = models.AutoField(primary_key=True)
    StockType = models.CharField(max_length=500)
    SupplierID = models.IntegerField()
    DateOfRecieved = models.DateField()
