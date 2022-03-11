
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from InventoryAPP.models import Items, Stocks
from InventoryAPP.serializers import ItemSerializer, StockSerializer


# Create your views here.


@csrf_exempt
def itemApi(request, id=0):
    if request.method == 'GET':
        items = Items.objects.all()
        items_serializer = ItemSerializer(items, many=True)
        return JsonResponse(items_serializer.data, safe=False)
    elif request.method == 'POST':
        item_data = JSONParser().parse(request)
        items_serializer = ItemSerializer(data=item_data)
        if items_serializer.is_valid():
            items_serializer.save()
            return JsonResponse("Added Successfully", safe=False)
        return JsonResponse("Failed to Add", safe=False)
    elif request.method == 'PUT':
        item_data = JSONParser().parse(request)
        item = Items.objects.get(ItemID=item_data['ItemID'])
        items_serializer = ItemSerializer(item, data=item_data)
        if items_serializer.is_valid():
            items_serializer.save()
            return JsonResponse("Updated Successfully", safe=False)
        return JsonResponse("Failed to Update")
    elif request.method == 'DELETE':
        item = Items.objects.get(ItemID=id)
        item.delete()
        return JsonResponse("Deleted Successfully", safe=False)


@csrf_exempt
def stockApi(request, id=0):
    if request.method == 'GET':
        stocks = Stocks.objects.all()
        stocks_serializer = StockSerializer(stocks, many=True)
        return JsonResponse(stocks_serializer.data, safe=False)
    elif request.method == 'POST':
        stock_data = JSONParser().parse(request)
        stocks_serializer = StockSerializer(data=stock_data)
        if stocks_serializer.is_valid():
            stocks_serializer.save()
            return JsonResponse("Added Successfully", safe=False)
        return JsonResponse("Failed to Add", safe=False)
    elif request.method == 'PUT':
        stock_data = JSONParser().parse(request)
        stock = Stocks.objects.get(StockID=stock_data['StockID'])
        stocks_serializer = StockSerializer(stock, data=stock_data)
        if stocks_serializer.is_valid():
            stocks_serializer.save()
            return JsonResponse("Updated Successfully", safe=False)
        return JsonResponse("Failed to Update")
    elif request.method == 'DELETE':
        stock = Stocks.objects.get(StockID=id)
        stock.delete()
        return JsonResponse("Deleted Successfully", safe=False)
