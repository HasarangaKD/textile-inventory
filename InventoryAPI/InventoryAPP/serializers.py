from rest_framework import serializers
from InventoryAPP.models import Items, Stocks


class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Items
        fields = ('ItemID', 'StockId', 'ItemType',
                  'ItemName', 'BrandName', 'Quantity')


class StockSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stocks
        fields = ('StockID', 'StockType', 'SupplierID', 'DateOfRecieved')
