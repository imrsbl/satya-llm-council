package com.satya.app.di;

import com.satya.app.data.remote.OpenRouterApi;
import dagger.internal.DaggerGenerated;
import dagger.internal.Factory;
import dagger.internal.Preconditions;
import dagger.internal.QualifierMetadata;
import dagger.internal.ScopeMetadata;
import javax.annotation.processing.Generated;
import javax.inject.Provider;
import okhttp3.OkHttpClient;

@ScopeMetadata("javax.inject.Singleton")
@QualifierMetadata
@DaggerGenerated
@Generated(
    value = "dagger.internal.codegen.ComponentProcessor",
    comments = "https://dagger.dev"
)
@SuppressWarnings({
    "unchecked",
    "rawtypes",
    "KotlinInternal",
    "KotlinInternalInJava",
    "cast"
})
public final class AppModule_ProvideOpenRouterApiFactory implements Factory<OpenRouterApi> {
  private final Provider<OkHttpClient> clientProvider;

  public AppModule_ProvideOpenRouterApiFactory(Provider<OkHttpClient> clientProvider) {
    this.clientProvider = clientProvider;
  }

  @Override
  public OpenRouterApi get() {
    return provideOpenRouterApi(clientProvider.get());
  }

  public static AppModule_ProvideOpenRouterApiFactory create(
      Provider<OkHttpClient> clientProvider) {
    return new AppModule_ProvideOpenRouterApiFactory(clientProvider);
  }

  public static OpenRouterApi provideOpenRouterApi(OkHttpClient client) {
    return Preconditions.checkNotNullFromProvides(AppModule.INSTANCE.provideOpenRouterApi(client));
  }
}
