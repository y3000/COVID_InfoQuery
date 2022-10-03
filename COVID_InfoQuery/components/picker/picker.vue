<template>
	<view class="uni-title uni-common-pl">地区选择器</view>
	<view class="uni-list">
		<view class="uni-list-cell">
			<view class="uni-list-cell-left">
				当前选择
			</view>
			<view class="uni-list-cell-db">
				<picker @change="bindPickerChange" :value="index" :range="array">
					<view class="uni-input">{{array[index]}}</view>
				</picker>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style>
</style>